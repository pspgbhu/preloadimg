/**!
*  A library for preload images.
*  @author pspgbhu <brotherchun001@gmail.com>
*  @param  {Array}     srcAry  The array of image src.
*  @param  {function}  success success callback.
*  @param  {funciton}  fail    fail callback.
*  @param  {funciton}  done    done callback. it will be called when all images preoloaded whatever success or failed
*/


(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.preloadimg = factory());
}(this, (function () { 'use strict';

function preloadimg(srcAry, success, fail, done) {
  var precent = 0;
  var loadedimg = 0;
  var images = new Array;
  var length = srcAry.length;


  /**
   *  loading images
   */
  for (var i = 0; i < srcAry.length; i++) {
    images[i] = new Image();
    images[i].src = srcAry[i];

    // loaded success
    images[i].onload = function(e) {
      var argus = {};
      loadedimg += 1;
      precent = Math.round(loadedimg / length * 100) / 100;

      argus = {
        process: precent,
        result: 'success',
      };

      if (typeof success === 'function') {
        success(argus);
      }

      if (typeof done === 'function' && precent === 1) {
        done();
      }
    };

    // loaded fail
    images[i].onerror = function (e) {
      var argus = {};
      loadedimg += 1;
      precent = Math.round(loadedimg / length * 100) / 100;

      argus = {
        process: precent,
        result: 'failed'
      };

      if (typeof fail === 'function') {
        fail(argus);
      }

      if (typeof done === 'function' && precent === 1) {
        done();
      }

      /**
       *  The image load failed while the precent equal to 100%,
       *  the callback of success will be called also.
       *  I did this for users can do something when the precent equal to 100% only in success callback.
       *
       *  If you have any questions, i promise always to be open to it.
       *
       *  it should think more!
       */
      // if (precent === 1 && typeof success === 'function') {
      //   success(argus);
      // }
    };
  }
}

return preloadimg;

})));
