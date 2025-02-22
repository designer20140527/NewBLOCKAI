"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Twitter,
  Send,
  Github,
  Globe,
  Code,
  CheckCircle,
  Users,
  Coins,
  Network,
  Zap,
  Scale,
  DollarSign,
  Users2,
  Server,
  Shield,
  FileCode,
  Cpu,
  Award,
  Lock,
  Vote,
  Rocket,
  Expand,
  Target,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Manrope } from "next/font/google"

// 配置 Manrope 字体
const manrope = Manrope({ 
  subsets: ['latin'],
  // 预加载所有字重以确保可用性
  weight: ['400', '600'],
})

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // 修复类型错误
      const parallaxElements = document.querySelectorAll('.parallax')
      parallaxElements.forEach((elem) => {
        // 添加类型断言
        const element = elem as HTMLElement;
        const speed = Number(element.getAttribute('data-speed')) || 0.2;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  const faqs = [
    {
      q: "What is BLOCKAI?",
      a: "BLOCKAI is a decentralized platform that connects AI developers, miners, validators, and users to share, access, and monetize AI models. It uses blockchain technology and the native $SOA token to facilitate secure, transparent, and efficient interactions within the ecosystem.",
    },
    {
      q: "How does BLOCKAI work?",
      a: "BLOCKAI operates through a decentralized network where AI developers (miners) contribute their models, validators assess and rank the quality of these models, and users pay with $SOA tokens to access AI-powered services. This ensures fair rewards for contributions and efficient model selection for users.",
    },
    {
      q: "What makes BLOCKAI different from other AI platforms?",
      a: "Unlike centralized AI platforms, BLOCKAI is fully decentralized, providing transparency and security while fostering community-driven innovation. Its reward system based on blockchain technology ensures that contributors are fairly compensated, and its use of the $SOA token creates a seamless economy for AI access.",
    },
    {
      q: "How can I participate in the BLOCKAI ecosystem?",
      a: "You can participate in BLOCKAI by: Contributing AI models as a miner (developer), evaluating AI models as a validator, using AI services as a user (paying with $SOA tokens), and staking $SOA tokens to earn rewards and contribute to the network's security and growth.",
    },
    {
      q: "What is the role of $SOA tokens in the ecosystem?",
      a: "$SOA tokens are the utility token of the BLOCKAI ecosystem. They are used for paying for AI services, rewarding miners and validators, staking to earn rewards, and participating in governance.",
    },
  ]

  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.className = 'fixed inset-0 pointer-events-none opacity-20'
    document.body.appendChild(canvas)
    
    // 粒子动画逻辑...
    
    return () => canvas.remove()
  }, [])

  return (
    <div className={`min-h-screen bg-white ${manrope.className}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 
          ? "bg-white/90 backdrop-blur-lg shadow-md" 
          : "bg-white/80 backdrop-blur-md"
      }`}>
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="BLOCKAI Logo"
              width={40}
              height={40}
              className="opacity-80"
            />
            <span className="font-[600] text-xl">BLOCKAI</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Features", href: "#features" },
              { name: "Tokenomics", href: "#tokenomics" },
              { name: "Roadmap", href: "#roadmap" }
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-sm font-[400] text-gray-600 hover:text-black transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link 
              href="https://x.com/BLOCKAI_SOL" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Twitter size={20} />
            </Link>
            <Link 
              href="https://t.me/BLOCKAI_Portal" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Send size={20} />
            </Link>
            <Link 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Image
                src="/dextools.svg"
                alt="Dextools"
                width={20}
                height={20}
                style={{ filter: 'brightness(0) saturate(100%)' }}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </Link>
            <Link 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Image
                src="/dexscreener.svg"
                alt="Dexscreener"
                width={20}
                height={20}
                style={{ filter: 'brightness(0) saturate(100%)' }}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background with zoom effect */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              <source src="/bgv.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        {/* 添加科技感网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* 添加抽象圆形装饰 */}
        <div className="absolute left-0 top-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-gray-600 text-lg mb-4 font-light tracking-wider">Decentralizing AI for the Future</p>
            <h1 className="text-4xl md:text-6xl font-[600] text-black mb-12 leading-[1.2] md:leading-[1.15]">
              A Revolutionary Platform for AI Development, Sharing, and Utilization
            </h1>
          </motion.div>

          {/* Social Buttons */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="https://x.com/BLOCKAI_SOL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-colors"
            >
              <Twitter size={20} />
              <span>Twitter</span>
            </Link>
            <Link
              href="https://t.me/BLOCKAI_Portal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 border border-black rounded-full hover:bg-black/5 transition-colors"
            >
              <Send size={20} />
              <span>Telegram</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div id="about" className="max-w-[1200px] mx-auto px-4 py-24">
        <div className="relative">
          {/* Decorative Line */}
          <div className="absolute left-0 top-0 h-full w-px bg-black opacity-10" />

          <div className="pl-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-[400]">
                BLOCKAI is the next step in the evolution of artificial intelligence, leveraging decentralized
                blockchain technology to empower AI developers and users globally.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 font-[400]">
                By creating a platform where AI models are developed, shared, and rewarded through a native
                cryptocurrency, BLOCKAI aims to unlock the full potential of AI for a wide range of applications.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-[400]">
                The native token, <span className="font-mono">$SOA</span>, drives the ecosystem by rewarding
                contributors, securing the network, and enabling access to AI-powered solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* How BLOCKAI Works Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="relative text-3xl md:text-4xl font-[600] text-black mb-12 text-center">
            <span className="absolute -left-6 top-1/2 w-4 h-px bg-gradient-to-r from-black to-transparent" />
            How BLOCKAI Works: A Decentralized AI Ecosystem
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-12 font-[400] text-center max-w-4xl mx-auto">
            BLOCKAI operates on a decentralized network of miners (AI developers) and validators, where AI models are
            hosted, validated, and made available for users. Here's how the ecosystem functions:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              {
                icon: Code,
                title: "AI Miners (Developers)",
                description:
                  "Developers contribute their AI models to the platform, gaining rewards in the form of $SOA for their computational contributions.",
              },
              {
                icon: CheckCircle,
                title: "Validators",
                description:
                  "Validators are responsible for evaluating the quality of AI models provided by miners, ensuring the best and most efficient models are ranked.",
              },
              {
                icon: Users,
                title: "Users",
                description:
                  "Users can access AI models through smart contracts, paying with $SOA tokens for various AI-powered applications.",
              },
              {
                icon: Coins,
                title: "Tokenization",
                description:
                  "The use of $SOA tokens ensures secure and transparent transactions, empowering users and rewarding contributors.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-black rounded-full p-3 relative"
                  whileHover={{ 
                    scale: 1.1,
                  }}
                >
                  {/* 添加发光效果 */}
                  <div className="absolute inset-0 bg-black rounded-full blur-sm opacity-50" />
                  <item.icon className="text-white relative z-10" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-[600] mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[600px]">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="w-full h-full"
            >
              <Image
                src="/image-1.png"
                alt="BLOCKAI Ecosystem Illustration"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Unmatched Innovation Section */}
      <div id="features" className="bg-gray-50 py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="relative text-3xl md:text-4xl font-[600] text-black mb-12 text-center">
              <span className="absolute -left-6 top-1/2 w-4 h-px bg-gradient-to-r from-black to-transparent" />
              Unmatched Innovation with BLOCKAI
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: "Decentralized AI Network",
                description:
                  "BLOCKAI ensures that AI development and usage are not controlled by any central authority, providing a truly open and democratic system for AI sharing.",
              },
              {
                icon: Zap,
                title: "Dynamic Rewards System",
                description:
                  "Miners and validators are rewarded based on their contributions and the quality of their work, ensuring that the most valuable models and evaluations are prioritized.",
              },
              {
                icon: Scale,
                title: "Scalable Ecosystem",
                description:
                  "As BLOCKAI grows, so does its potential. The decentralized nature of the platform ensures that it can scale with the increasing demand for AI models and services.",
              },
              {
                icon: DollarSign,
                title: "Low-Cost Access to AI",
                description:
                  "With the use of $SOA, developers and businesses can access AI models at a fraction of the cost compared to centralized providers, making advanced AI services more accessible.",
              },
              {
                icon: Users2,
                title: "Global Collaboration",
                description:
                  "By providing a platform for AI developers around the world to collaborate and share models, BLOCKAI fosters an environment of innovation and collective progress.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md relative group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                {/* 添加悬停时的发光效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className="bg-black rounded-full p-3 relative"
                    whileHover={{ 
                      scale: 1.1,
                    }}
                  >
                    {/* 添加发光效果 */}
                    <div className="absolute inset-0 bg-black rounded-full blur-sm opacity-50" />
                    <item.icon className="text-white relative z-10" size={24} />
                  </motion.div>
                  <h3 className="text-xl font-[600]">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology in AI Development Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-24 border-t border-black/10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="relative text-3xl md:text-4xl font-[600] text-black mb-12 text-center">
            <span className="absolute -left-6 top-1/2 w-4 h-px bg-gradient-to-r from-black to-transparent" />
            Technology in AI Development
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-12 font-[400] text-center max-w-4xl mx-auto">
            BLOCKAI combines cutting-edge blockchain technology with decentralized AI mining to ensure that AI models
            are both accessible and efficient. The platform utilizes a hybrid consensus mechanism that combines Proof of
            Work (PoW) and Proof of Stake (PoS), ensuring the security and fairness of the network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              {
                icon: Server,
                title: "AI Mining",
                description:
                  "Developers contribute by hosting AI models on the platform, which are available for users. This model ensures a constant supply of AI resources to the ecosystem.",
              },
              {
                icon: Shield,
                title: "Validators",
                description:
                  "Validators ensure the quality of the models, creating a reputation system that allows users to identify high-quality, reliable AI solutions.",
              },
              {
                icon: FileCode,
                title: "Smart Contracts",
                description:
                  "Smart contracts facilitate the interactions between developers, validators, and users, ensuring secure and transparent operations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-black rounded-full p-3 relative"
                  whileHover={{ 
                    scale: 1.1,
                  }}
                >
                  {/* 添加发光效果 */}
                  <div className="absolute inset-0 bg-black rounded-full blur-sm opacity-50" />
                  <item.icon className="text-white relative z-10" size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-[600] mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[600px]">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, -2, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="w-full h-full"
            >
              <Image
                src="/image-2.png"
                alt="AI Technology Illustration"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tokenomics Section */}
      <div id="tokenomics" className="bg-gray-50 py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="relative text-3xl md:text-4xl font-[600] text-black mb-12 text-center">
              <span className="absolute -left-6 top-1/2 w-4 h-px bg-gradient-to-r from-black to-transparent" />
              Tokenomics
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-12 font-[400] text-center max-w-3xl mx-auto">
              The BLOCKAI ecosystem revolves around the $SOA token, which serves several key functions:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-16">
            <motion.div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="bg-black rounded-full p-3 relative"
                  whileHover={{ 
                    scale: 1.1,
                  }}
                >
                  {/* 添加发光效果 */}
                  <div className="absolute inset-0 bg-black rounded-full blur-sm opacity-50" />
                  <Cpu className="text-white relative z-10" size={24} />
                </motion.div>
                <h3 className="text-xl font-[600]">Access AI Services</h3>
              </div>
              <p className="text-gray-700">Pay with $SOA to unlock a wide range of AI models and services on the platform.</p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="bg-black rounded-full p-3 relative"
                  whileHover={{ 
                    scale: 1.1,
                  }}
                >
                  {/* 添加发光效果 */}
                  <div className="absolute inset-0 bg-black rounded-full blur-sm opacity-50" />
                  <Award className="text-white relative z-10" size={24} />
                </motion.div>
                <h3 className="text-xl font-[600]">Mining Rewards</h3>
              </div>
              <p className="text-gray-700">Developers earn $SOA for contributing high-quality AI models to the network.</p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="bg-black rounded-full p-3 relative"
                  whileHover={{ 
                    scale: 1.1,
                  }}
                >
                  {/* 添加发光效果 */}
                  <div className="absolute inset-0 bg-black rounded-full blur-sm opacity-50" />
                  <CheckCircle className="text-white relative z-10" size={24} />
                </motion.div>
                <h3 className="text-xl font-[600]">Validator Rewards</h3>
              </div>
              <p className="text-gray-700">Validators are rewarded in $SOA for evaluating and ranking AI models.</p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md md:col-span-3">
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="bg-black rounded-full p-3 relative"
                  whileHover={{ 
                    scale: 1.1,
                  }}
                >
                  {/* 添加发光效果 */}
                  <div className="absolute inset-0 bg-black rounded-full blur-sm opacity-50" />
                  <Lock className="text-white relative z-10" size={24} />
                </motion.div>
                <h3 className="text-xl font-[600]">Staking for Network Security</h3>
              </div>
              <p className="text-gray-700">Stake $SOA tokens to secure the network and earn staking rewards.</p>
            </motion.div>

            <motion.div className="bg-white p-6 rounded-lg shadow-md md:col-span-3">
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="bg-black rounded-full p-3 relative"
                  whileHover={{ 
                    scale: 1.1,
                  }}
                >
                  {/* 添加发光效果 */}
                  <div className="absolute inset-0 bg-black rounded-full blur-sm opacity-50" />
                  <Vote className="text-white relative z-10" size={24} />
                </motion.div>
                <h3 className="text-xl font-[600]">Governance Participation</h3>
              </div>
              <p className="text-gray-700">Participate in the platform's decision-making process with $SOA governance voting.</p>
            </motion.div>
          </div>

          <motion.div
            className="bg-white p-12 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-[600] mb-8 text-center">Token Distribution</h3>
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="text-center bg-gray-50 p-8 rounded-xl w-full md:w-auto">
                <p className="text-4xl font-[600] mb-3 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                  1,000,000,000
                </p>
                <p className="text-xl text-gray-600">Total Supply of $SOA</p>
              </div>

              <div className="flex-1 max-w-xl w-full">
                <div className="space-y-6">
                  {[
                    { label: "Miners & Validators Rewards", value: "25%", color: "bg-black" },
                    { label: "Ecosystem Growth", value: "5%", color: "bg-gray-700" },
                    { label: "Team & Advisors", value: "5%", color: "bg-gray-600" },
                    { label: "Community & Partnerships", value: "5%", color: "bg-gray-500" },
                    { label: "Liquidity", value: "60%", color: "bg-gray-400" },
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-[400] text-gray-700">{item.label}</span>
                        <span className="font-[600]">{item.value}</span>
                      </div>
                      <motion.div
                        className="h-2 bg-gray-100 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        <motion.div
                          className={`h-full ${item.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: item.value }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.8 }}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div id="roadmap" className="max-w-[1200px] mx-auto px-4 py-24 border-t border-black/10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="relative text-3xl md:text-4xl font-[600] text-black mb-12 text-center">
            <span className="absolute -left-6 top-1/2 w-4 h-px bg-gradient-to-r from-black to-transparent" />
            Roadmap
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-16 font-[400] text-center max-w-3xl mx-auto">
            BLOCKAI's journey is divided into three strategic phases:
          </p>
        </motion.div>

        <div className="relative">
          {/* 连接线 */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black to-transparent opacity-20 hidden md:block">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full blur-sm" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full blur-sm" />
          </div>

          <div className="space-y-32">
            {[
              {
                icon: Rocket,
                title: "Phase 1: Foundation & Launch",
                items: [
                  "Deployment of decentralized AI mining infrastructure",
                  "Integration with the first batch of validators",
                  "Community engagement and partnerships formation",
                  "Launch of $SOA token and initial platform setup",
                ],
              },
              {
                icon: Expand,
                title: "Phase 2: Expansion & Ecosystem Growth",
                items: [
                  "Expansion of AI model offerings and ecosystem participants",
                  "Launch of governance structure and DAO",
                  "Partnership with AI-focused startups and developers",
                  "Release of enhanced smart contract features",
                ],
              },
              {
                icon: Target,
                title: "Phase 3: Global Scaling & Sustainability",
                items: [
                  "Global expansion of the BLOCKAI network",
                  "Continued token staking and rewards improvements",
                  "Increased decentralization and community governance",
                  "Integration with DeFi protocols and further blockchain ecosystems",
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 md:gap-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* 时间线圆点 */}
                <div className="absolute left-[50%] top-0 w-8 h-8 -ml-4 bg-white border-2 border-black rounded-full hidden md:block" />
                
                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                  <motion.div
                    className="inline-flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.div 
                      className="bg-black rounded-full p-3 relative"
                      whileHover={{ 
                        scale: 1.1,
                      }}
                    >
                      {/* 添加发光效果 */}
                      <div className="absolute inset-0 bg-black rounded-full blur-sm opacity-50" />
                      <phase.icon className="text-white relative z-10" size={24} />
                    </motion.div>
                    <h3 className="text-2xl font-[600]">{phase.title}</h3>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ul className="space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-start gap-3 text-gray-700"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="relative text-3xl md:text-4xl font-[600] text-black mb-12 text-center">
              <span className="absolute -left-6 top-1/2 w-4 h-px bg-gradient-to-r from-black to-transparent" />
              FAQ
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button className="w-full text-left p-6 focus:outline-none" onClick={() => toggleFaq(index)}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-[600]">{faq.q}</h3>
                    <ChevronDown
                      className={`transform transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-700">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo-white.png"
                  alt="BLOCKAI Logo"
                  width={48}
                  height={48}
                  className="opacity-80"
                />
                <span className="font-[600] text-2xl">BLOCKAI</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing the AI industry through decentralized development, sharing, and utilization of AI
                models.
              </p>
            </div>

            <div className="flex justify-center">
              <div>
                <h4 className="text-xl font-[600] mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {[
                    { name: "Home", href: "#home" },
                    { name: "About", href: "#about" },
                    { name: "Features", href: "#features" },
                    { name: "Tokenomics", href: "#tokenomics" },
                    { name: "Roadmap", href: "#roadmap" }
                  ].map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(item.href)?.scrollIntoView({
                            behavior: 'smooth'
                          });
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <h4 className="text-xl font-[600] mb-4">Community</h4>
                <ul className="space-y-2">
                  {[
                    { name: "Twitter", url: "https://x.com/BLOCKAI_SOL" },
                    { name: "Telegram", url: "https://t.me/BLOCKAI_Portal" },
                    { name: "Dextools", url: "#" },
                    { name: "Dexscreener", url: "#" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 BLOCKAI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Abstract Line Decoration */}
      <div className="fixed top-0 right-0 w-px h-screen bg-gradient-to-b from-black/0 via-black/20 to-black/0" />
      <div className="fixed top-0 left-0 w-px h-screen bg-gradient-to-b from-black/0 via-black/20 to-black/0" />
    </div>
  )
}

