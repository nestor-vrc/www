interface ToolItem {
    description: string;
    href: string;
    subtitle: string;
    title: string;
}

export const tools: ToolItem[] = [
    {
        description:
            'NestorSDK bypasses the limitations of VRCSDK, enabling developers to create more immersive and interactive experiences. Unlock new possibilities for your VRChat worlds with ease.',
        href: 'https://github.com/nestor-vrc/NestorSDK',
        subtitle:
            'Empowering developers with enhanced tools for immersive experiences, bypassing VRCSDK limitations!',
        title: 'Nestor SDK',
    },
    {
        description:
            'With VRChime, you can test .vrcw files directly without the hassle. This tool streamlines your development workflow and ensures your worlds are ready for VRChat.',
        href: 'https://github.com/nestor-vrc/VRChime',
        subtitle: 'Easily test your VRChat worlds before publishing!',
        title: 'VRChime',
    },
    {
        description:
            'VRChat Launcher offers a more streamlined, performance-boosting way to launch VRChat, with privacy-focused improvements to keep your experience secure and fast.',
        href: 'https://github.com/nestor-vrc/VRChat-Launcher',
        subtitle: 'Optimize your VRChat launching experience!',
        title: 'VRChat Launcher',
    },
];
