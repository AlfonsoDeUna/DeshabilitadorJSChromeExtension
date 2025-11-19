// ==================== FUNCIONES AUXILIARES ====================

/**
 * Obtiene el estado actual de JS para el dominio activo.
 * Retorna 'allow', 'block' o 'default'.
 */
async function getJsStatus(activeTab) {
    if (!activeTab || !activeTab.url || activeTab.url.startsWith('chrome://')) {
        return 'error';
    }
    const url = new URL(activeTab.url);
    const pattern = url.origin + '/*';
    
    const result = await chrome.contentSettings.javascript.get({
        primaryUrl: pattern
    });
    
    return result.setting; 
}

/**
 * Establece el ajuste de JS y recarga la pestaña.
 * @param {string} setting - 'allow' o 'block'.
 */
async function setJsSetting(activeTab, setting) {
    if (!activeTab || !activeTab.url || activeTab.url.startsWith('chrome://')) {
        return;
    }
    
    const url = new URL(activeTab.url);
    const primaryPattern = url.origin + '/*'; 

    await new Promise((resolve, reject) => {
        chrome.contentSettings.javascript.set({
            primaryPattern: primaryPattern,
            setting: setting 
        }, () => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }
            console.log(`JS cambiado a: ${setting}`);
            resolve();
        });
    });

    // Recarga la pestaña para aplicar el nuevo ajuste
    chrome.tabs.reload(activeTab.id, { bypassCache: false });
    
    // Opcional: Cerrar el popup después de la acción
    // window.close(); 
}

// ==================== LÓGICA PRINCIPAL ====================

document.addEventListener('DOMContentLoaded', initializePopup);

async function initializePopup() {
    const toggle = document.getElementById('jsToggle');
    const statusLabel = document.getElementById('statusLabel');

    // 1. Obtener la pestaña activa
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const activeTab = tabs[0];

    // Manejar URLs no permitidas
    if (activeTab.url.startsWith('chrome://')) {
        statusLabel.textContent = "URL no soportada";
        toggle.disabled = true;
        return;
    }

    // 2. Obtener estado actual y configurar la UI
    const currentSetting = await getJsStatus(activeTab);

    // Si es 'allow' o 'default', el JS está activo
    const isJsEnabled = (currentSetting === 'allow' || currentSetting === 'default');
    
    toggle.checked = isJsEnabled;
    statusLabel.textContent = isJsEnabled ? "ACTIVADO" : "DESACTIVADO";
    statusLabel.style.color = isJsEnabled ? "#2196F3" : "#ff4d4d";


    // 3. Establecer el Listener de Eventos
    toggle.addEventListener('change', async function() {
        const newSetting = this.checked ? 'allow' : 'block';
        
        // Actualizar la etiqueta inmediatamente
        statusLabel.textContent = this.checked ? "ACTIVADO" : "DESACTIVADO";
        statusLabel.style.color = this.checked ? "#2196F3" : "#ff4d4d";

        // Ejecutar la acción
        await setJsSetting(activeTab, newSetting);
    });
}