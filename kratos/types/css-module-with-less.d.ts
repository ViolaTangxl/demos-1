declare module '*.m.less' {
  const cssModuleExport: {
    [className: string]: string
  }

  export default cssModuleExport
}
