define([], () => {
  'use strict';

  class PageModule {

    /**
     *
     * @param {String} arg1
     * @return {String}
     */
    completeStep(steps, currentstep) {
      steps.filter(x => { return x.id === currentstep; })[0].status = "success";
      return steps;
    }
  }

  return PageModule;
});
