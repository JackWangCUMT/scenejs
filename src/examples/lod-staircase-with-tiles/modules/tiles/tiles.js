/**
 * Content module containing a tiled floor
 *
 * Lindsay Kay July 15, 2010
 * lindsay.kay@xeolabs.com
 *
 * Use it in your scene like this:
 *
 *  SceneJS.useModule({
 *      name: "org.scenejs.modules.sky.milkyway",
 *      params: {
 *          radius : 500.0,       // default 500.0
 *          rotationSpeed : 1.0   // default 1.0
 *      }
 * })
 *
 */
(function() {
    var configs = {};

    SceneJS.installModule("tiles", {

        init : function (cfg) {
            configs = cfg;
        },

        getNode : function(params) {
            return SceneJS.material({
                baseColor:      { r: 1.0, g: 1.0, b: 1.0 },
                specularColor:  { r: 1.0, g: 1.0, b: 1.0 },
                specular:       0.9,
                shine:          6.0
            },
                    SceneJS.texture({
                        layers: [
                            {
                                uri: configs.baseURL + "Stone45l.jpg",
                                minFilter: "linearMipMapLinear",
                                magFilter: "linear",
                                wrapS: "repeat",
                                wrapT: "repeat",
                                isDepth: false,
                                depthMode:"luminance",
                                depthCompareMode: "compareRToTexture",
                                depthCompareFunc: "lequal",
                                flipY: false,
                                width: 1,
                                height: 1,
                                internalFormat:"lequal",
                                sourceFormat:"alpha",
                                sourceType: "unsignedByte",
                                applyTo:"baseColor",
                                scale : { x: 300, y: 300, z: 1.0 }
                            }
                        ]},
                            SceneJS.scale({ x: 6400, y: .5, z : 4800 },
                                    SceneJS.objects.cube())));
        }
    });
})();