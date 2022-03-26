export function pathResolve(parent: string, child: string) {
    const str = parent + '/' + child
    return str.replace(/\/+/g, '/')
}
