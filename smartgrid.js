const smartgrid = require('smart-grid');

smartgrid('./src/default/css', {
    mobileFirst: false,
    columns: 24,
    offset: "20px",
    outputStyle: "scss",
    container: {
        maxWidth: "1480px",
        fields: "20px",
    },
    breakPoints: {
        xlg: {
            width: "1919.98px",
            fields: "20px",
            maxWidth: "1220px",
        },
        lg: {
            width: "1279.98px",
            fields: "30px",
        },
        md: {
            width: "991.98px",
            fields: "30px",
        },
        sm: {
            width: "767.98px",
            fields: "15px",
            offset: "10px",
        },
        xs: {
            width: "575.98px",
            fields: "15px",
            offset: "10px",
        }
    },
});