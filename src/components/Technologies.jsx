import { FaCss3, FaFileExcel, FaGithub, FaHtml5, FaJava } from 'react-icons/fa'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { MdJavascript } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { FaBootstrap } from 'react-icons/fa6'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: 10,
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
            whileInView={{opacity: 1,y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration:1.5}}
             className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>
            <motion.div
            whileInView={{opacity:1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
             className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-4xl text-cyan-400' />
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className='text-4xl text-blue-600' />
                </motion.div>

                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsGithub className='text-4xl text-white-500' />
                </motion.div>

                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <MdJavascript className='text-4xl text-yellow-500' />
                </motion.div>

                <motion.div
                    variants={iconVariants(6.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className='text-4xl text-blue-500' />
                </motion.div>

                <motion.div
                    variants={iconVariants(7)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaBootstrap className='text-4xl text-purple-500' />
                </motion.div>

                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className='text-4xl text-orange-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3 className='text-4xl text-blue-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGithub className='text-4xl text-gray-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaFileExcel className='text-4xl text-green-500' />
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Technologies
