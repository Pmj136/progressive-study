type RequestEntity = {
    url: string
    method?: string,
    data?: Record<string, unknown>
}

export declare var version: string;

declare function request(entity: RequestEntity): Promise<unknown>;

declare function get(url: any, data?: any): ReturnType<typeof request>;

declare function post(url: any, data?: any): ReturnType<typeof request>;

export function createEl(el: string, content: string): HTMLElement
export function createEl(entity: { el: string, content: string }): HTMLElement
