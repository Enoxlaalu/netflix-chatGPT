declare module '*.scss' {
    const styles: { [className: string]: string }
    export default styles
}

declare module '*.svg' {
    import type { FC, SVGProps } from 'react'
    const content: FC<SVGProps<SVGElement>>
    export default content
}

declare module '*.png' {
    const value: string
    export default value
}
declare module '*.webp' {
    const value: string
    export default value
}
