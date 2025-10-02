"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BarChart3, Upload, Bot, TrendingUp, CheckCircle, Database, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { JSX } from 'react';

interface Step {
  icon: JSX.Element | React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Upload className="h-8 w-8 text-primary" />,
    title: '1. Submit Your Data',
    description: 'Fill out a simple form to upload your customer data as a CSV file. We only need your raw data to get started.',
  },
  {
    icon: <Bot className="h-8 w-8 text-secondary" />,
    title: '2. AI Agent Gets to Work',
    description: 'Our intelligent AI agent immediately begins processing your data. It fine-tunes itself with your information, learns your business\'s unique patterns, and prepares for in-depth analysis.',
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: '3. Comprehensive Analysis',
    description: 'The AI delves into various aspects of your data, including performing market basket analysis to uncover product relationships and preparing to answer all your questions regarding your customers and sales.',
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-secondary" />,
    title: '4. Dashboard Generation',
    description: 'Once the analysis is complete, the assistant compiles all findings into a professionally formatted, easy-to-understand dashboard with charts, KPIs, and primary insights.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: '5. Dashboard Delivered to You',
    description: 'Your final interactive dashboard is automatically made available to you, typically within minutes of your data upload.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-secondary" />,
    title: '6. Actionable Insights',
    description: 'Use your dashboard and business recommendations to make data-driven decisions, optimize your strategies, and enhance your business performance. Simple, fast, and effective!',
  },
];

const HowItWorksCRM = () => {
  
  // animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // animation variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-5 sm:py-10">
      <div className="container mx-auto px-4">

        {/* header div */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* title */}
          <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            How <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">BI Analysis</span> Works
          </h1>

          {/* description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the simple yet powerful process behind our AI-driven data analysis. Get from data to decisions in just a few steps.
          </p>
        </motion.div>

        {/* steps container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* loop through each step */}
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-muted/50 h-full flex flex-col shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border border-border/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                  {step.icon && React.isValidElement(step.icon) ? React.cloneElement(step.icon as React.ReactElement<{className? : string}>, { className: `h-10 w-10 ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}` }) : step.icon}
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* back button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: steps.length * 0.1 + 0.2 }}
          className="text-center mt-16"
        >
          <Link href="/bi-analysis/display">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground shadow-lg transform hover:scale-105">
              Back to BI Analysis
            </Button>
          </Link>
        </motion.div>

        
      </div>
    </div>
  );
};

export default HowItWorksCRM;