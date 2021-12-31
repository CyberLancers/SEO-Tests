module.exports = {
    ci: {
        collect: {
            url: [
                'https://tests.cyberlancersseo.com/bootstrap/no-bootstrap.html'
            ],
            numberOfRuns: 3, // Set low to speed up the test runs. Default is 3.
            headful: true, // Show the browser which is helpful when checking the config
            settings: {
                disableStorageReset: true, // Don't clear localStorage / IndexedDB / etc before loading the page
                preset: 'desktop'
            }
        },
        upload: {
            target: 'temporary-public-storage'
        }
    }
};