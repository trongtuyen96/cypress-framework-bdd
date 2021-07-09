const MOTOG4_EMULATION_METRICS = {
    mobile: true,
    width: 360,
    height: 640,
    deviceScaleFactor: 2.625,
    disabled: false,
};

const DESKTOP_EMULATION_METRICS = {
    mobile: false,
    width: 1350,
    height: 940,
    deviceScaleFactor: 1,
    disabled: false,
};

const screenEmulationMetrics = {
    mobile: MOTOG4_EMULATION_METRICS,
    desktop: DESKTOP_EMULATION_METRICS
};

module.exports = {
    screenEmulationMetrics
};