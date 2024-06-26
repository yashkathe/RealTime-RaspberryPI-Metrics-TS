export type isRamUtil = {
    name: string;
    x: number
}

export type isCpuUtil = {
    core: number;
    load: number
}

export type isTemp = {
    name: string;
    temp: number
}

export type isRamStat = {
    totalRam: number;
    minRam: number;
    freeRam: number;
}

export type isSwapStat = {
    totalSwap: number;
    minSwap: number;
    freeSwap: number;
}

export type isError = {
    message: string;
}