import FadeAnimation from './fade';

/**
 * Animation factory
 * Get an animation by its name
 */
export default {
  fade: () => new FadeAnimation(),
};
