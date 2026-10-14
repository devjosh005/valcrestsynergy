import { motion, useReducedMotion } from 'framer-motion';
import { ButtonLink } from '../ButtonLink';
import { images } from '../../data/images';

const ease = [0.23, 1, 0.32, 1] as const;

export function HomeHero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease, delay }
  });

  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-navy md:min-h-[100svh]">
      <img
        src={images.heroOffshore}
        alt="Offshore oil and gas production platform illuminated at dusk"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]" />
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/75 to-navy/10" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy/80 to-transparent" aria-hidden="true" />

      <div className="container-site pb-28 pt-36">
        <div className="max-w-3xl">
          <motion.h1
            {...enter(0)}
            className="text-[40px] font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            
            Powering Progress.
            <span className="block text-gold">Delivering Energy Solutions.</span>
          </motion.h1>
          <motion.p {...enter(0.08)} className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            Integrated oilfield, engineering, EPC/EPCI, equipment, workforce, HSSE and commercial solutions that support
            operational excellence across the energy value chain.
          </motion.p>
          <motion.div {...enter(0.16)} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink to="/services" arrow>
              Explore Our Services
            </ButtonLink>
            <ButtonLink to="/about" variant="light">
              Discover Our Company
            </ButtonLink>
          </motion.div>
        </div>
      </div>

      <a
        href="#introduction"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/60 transition-colors duration-150 hover:text-white md:flex"
        aria-label="Scroll to introduction">
        
        Scroll
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-white/40">
          <motion.span
            className="mt-2 h-2 w-1 rounded-full bg-gold"
            animate={reduce ? undefined : { y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
          
        </span>
      </a>
    </section>);

}
