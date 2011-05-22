/**
 *  ${TM_CLASSNAME}
 *
 *  Created by ${TM_FULLNAME} on ${TM_DATE}.
 *  Copyright (c) ${TM_YEAR} ${TM_ORGANIZATION_NAME}. All rights reserved.
 */

ig.module('game.entities.${TM_NEW_FILE_BASENAME}')
.requires(
    'impact.entity'
)
.defines(function () {

Entity${TM_CLASSNAME} = ig.Entity.extend({
    size: { x: 48, y: 48 },

    animSheet: new ig.AnimationSheet('${media/$TM_NEW_FILE_BASENAME.png}', 48, 48),

    init: function(x, y, settings) {
        this.parent(x, y, settings);
    }

});

});