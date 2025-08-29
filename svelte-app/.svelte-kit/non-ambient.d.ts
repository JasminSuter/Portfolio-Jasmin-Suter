
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/animations" | "/art" | "/projects";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/animations": Record<string, never>;
			"/art": Record<string, never>;
			"/projects": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/animations" | "/animations/" | "/art" | "/art/" | "/projects" | "/projects/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/fonts/Handwritten-Regular.woff" | "/images/Aboutmepage.png" | "/images/About_Me.png" | "/images/Animation_Background.png" | "/images/Apricat.png" | "/images/Apricat_noback.png" | "/images/ArrowBack.png" | "/images/ArrowLeft.png" | "/images/ArrowRight.png" | "/images/Art_Background.png" | "/images/Comissionspage.png" | "/images/HP_Aisle.png" | "/images/HP_Animation.png" | "/images/HP_Art.png" | "/images/HP_Background.png" | "/images/HP_Cat.png" | "/images/HP_Close.png" | "/images/HP_Commission.png" | "/images/HP_Commission2.png" | "/images/HP_Commission3.png" | "/images/HP_MeFrame.png" | "/images/HP_MeFrame2.png" | "/images/HP_Projects.png" | "/styles/global.css" | "/uploads/animation/Ball_Animation.gif" | "/uploads/animation/Spiral_Animation.gif" | "/uploads/animation/Walking_Animation.gif" | "/uploads/art/Image1.png" | "/uploads/art/Image10.png" | "/uploads/art/Image11.png" | "/uploads/art/Image12.png" | "/uploads/art/Image2.png" | "/uploads/art/Image3.png" | "/uploads/art/Image4.png" | "/uploads/art/Image5.png" | "/uploads/art/Image6.png" | "/uploads/art/Image7.png" | "/uploads/art/Image8.png" | "/uploads/art/Image9.png" | "/uploads/project1/P1_Assets.png" | "/uploads/project1/P1_Background.png" | "/uploads/project1/P1_Backgroundksetch.png" | "/uploads/project1/P1_Charactersketch.png" | "/uploads/project1/P1_Giantsketch.png" | "/uploads/project1/P1_Scene.png" | "/uploads/project1/P1_Witchsprite.png" | "/uploads/project2/P2_Apps.png" | "/uploads/project2/P2_File.png" | "/uploads/project2/P2_Gamescreen.png" | "/uploads/project2/P2_Mascott.png" | "/uploads/project2/P2_Mockup.png" | string & {};
	}
}