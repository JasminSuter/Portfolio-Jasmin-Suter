export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/Handwritten-Regular.woff","images/Aboutmepage.png","images/About_Me.png","images/Animation_Background.png","images/Apricat.png","images/Apricat_noback.png","images/ArrowBack.png","images/ArrowLeft.png","images/ArrowRight.png","images/Art_Background.png","images/Comissionspage.png","images/HP_Aisle.png","images/HP_Animation.png","images/HP_Art.png","images/HP_Background.png","images/HP_Cat.png","images/HP_Close.png","images/HP_Commission.png","images/HP_Commission2.png","images/HP_Commission3.png","images/HP_MeFrame.png","images/HP_MeFrame2.png","images/HP_Projects.png","styles/global.css","uploads/animation/Ball_Animation.gif","uploads/animation/Spiral_Animation.gif","uploads/animation/Walking_Animation.gif","uploads/art/Image1.png","uploads/art/Image10.png","uploads/art/Image11.png","uploads/art/Image12.png","uploads/art/Image2.png","uploads/art/Image3.png","uploads/art/Image4.png","uploads/art/Image5.png","uploads/art/Image6.png","uploads/art/Image7.png","uploads/art/Image8.png","uploads/art/Image9.png","uploads/project1/P1_Assets.png","uploads/project1/P1_Background.png","uploads/project1/P1_Backgroundksetch.png","uploads/project1/P1_Charactersketch.png","uploads/project1/P1_Giantsketch.png","uploads/project1/P1_Scene.png","uploads/project1/P1_Witchsprite.png","uploads/project2/P2_Apps.png","uploads/project2/P2_File.png","uploads/project2/P2_Gamescreen.png","uploads/project2/P2_Mascott.png","uploads/project2/P2_Mockup.png"]),
	mimeTypes: {".woff":"font/woff",".png":"image/png",".css":"text/css",".gif":"image/gif"},
	_: {
		client: {start:"_app/immutable/entry/start.Ckkmn5IZ.js",app:"_app/immutable/entry/app.DqjREwYv.js",imports:["_app/immutable/entry/start.Ckkmn5IZ.js","_app/immutable/chunks/cpY3-3vE.js","_app/immutable/chunks/Ck1oHsZR.js","_app/immutable/chunks/DWoB3wgL.js","_app/immutable/entry/app.DqjREwYv.js","_app/immutable/chunks/DWoB3wgL.js","_app/immutable/chunks/Ck1oHsZR.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CIof2HWV.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/animations","/art","/projects"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
