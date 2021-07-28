((function () {
    return new Promise(async (resolve, reject) => {
        /**
         * Returns true if a module is loaded in the window
         * @param {string} moduleName module to check if exists
         * @returns {boolean}
         */
        const checkIfModuleLoaded = (moduleName) => !!(this[moduleName] || self[moduleName] || window[moduleName])

        const startLoading = Date.now()

        const loadingInterval = setInterval(() => {
            if (Date.now() - startLoading > 5000) {
                reject(new Error('Failed to load Two.js in time'))
            }
            if (checkIfModuleLoaded('Two')) {
                (this || self || window).compareTTF = {
                    /**
                     * Module functionality
                     */
                }
                console.log('Loaded Two.js')
                clearInterval(loadingInterval)
                resolve()
            }
        })
    })
}).bind((this || self || window)))()