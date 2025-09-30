"use client";

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import ReactMarkdown from 'react-markdown'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {localStorageDataNames} from "@/lib/constants";

const WebsiteSWOT = () => {
  
    const router = useRouter();

    const [data, setData] = useState({
        "pageSpeedScore": 0,
        "internalLinks": 0,
        "externalLinks": 0,
        "contentInfo": {
            "imagesCount": 0,
            "imagesMissingAltTage": 0
        },
        "pageInfo": {
            "title": "",
            "titleLength": 0,
            "metaDescription": "",
            "metaDescriptionLength": 0,
            "https": false,
            "canonicalUrl": ""
        },
        "headingStructure": {
            "h1Tages": [""],
            "h2Tages": [""],
            "h3Tages": [""],
            "h4Tages": [""],
            "h5Tages": [""],
            "h6Tages": [""]
        },
        "schemaMarkup": [""],
        "socialLinks": [""],
        "openGraphTags": {
            "title": "",
            "description": "",
            "url": "",
            "type": "",
            "siteName": ""
        },
        "summary": "",
        "fullSocialAnalysis": ""
    });

    useEffect(()=>{
        
        if(!localStorage.getItem(localStorageDataNames.WEBSITE_SWOT)){
            return router.push("/");
        }

        setData(JSON.parse(localStorage.getItem(localStorageDataNames.WEBSITE_SWOT)!));

    }, []);

    function handleDeleteAnalysis(){
      localStorage.removeItem(localStorageDataNames.WEBSITE_SWOT);
      router.push("/");
    }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <header className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-5xl font-extrabold text-center text-white mb-4"
        >
          Website SWOT Analysis
        </motion.h1>
        <div className="flex justify-center">
          <Button onClick={handleDeleteAnalysis} size="lg" className="bg-background text-red-600 hover:bg-background/90 shadow-lg transform hover:scale-105">
            Delete this analysis
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        

        {/* Heading Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='row-span-6'
        >
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Heading Structure</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              
              <div className='mb-3'>
                <div className='text-blue-400 font-bold text-2xl'>H1 Tags: </div>
                <div className='flex flex-col'>
                    {data.headingStructure.h1Tages.map((tag, index)=>(
                        tag.length > 0 ? <span key={index} className='me-3'> <span className='text-white font-extrabold '>-</span> {tag},</span> : <p key={index}></p>
                    ))}
                </div>
              </div>

              <div className='mb-3'>
                <div className='text-blue-400 font-bold text-2xl'>H2 Tags: </div>
                <div className='flex flex-col'>
                    {data.headingStructure.h2Tages.map((tag, index)=>(
                        tag.length > 0 ? <span key={index} className='me-3'> <span className='text-white font-extrabold '>-</span> {tag},</span> : <p key={index}></p>
                    ))}
                </div>
              </div>

              <div className='mb-3'>
                <div className='text-blue-400 font-bold text-2xl'>H3 Tags: </div>
                <div className='flex flex-col'>
                    {data.headingStructure.h3Tages.map((tag, index)=>(
                        tag.length > 0 ? <span key={index} className='me-3'> <span className='text-white font-extrabold '>-</span> {tag},</span> : <p key={index}></p>
                    ))}
                </div>
              </div>
              
              <div className='mb-3'>
                <div className='text-blue-400 font-bold text-2xl'>H4 Tags: </div>
                <div className='flex flex-col'>
                    {data.headingStructure.h4Tages.map((tag, index)=>(
                        tag.length > 0 ? <span key={index} className='me-3'> <span className='text-white font-extrabold '>-</span> {tag},</span> : <p key={index}></p>
                    ))}
                </div>
              </div>
              
              <div className='mb-3'>
                <div className='text-blue-400 font-bold text-2xl'>H5 Tags: </div>
                <div className='flex flex-col'>
                    {data.headingStructure.h5Tages.map((tag, index)=>(
                        tag.length > 0 ? <span key={index} className='me-3'> <span className='text-white font-extrabold '>-</span> {tag},</span> : <p key={index}></p>
                    ))}
                </div>
              </div>
              
              <div className='mb-3'>
                <div className='text-blue-400 font-bold text-2xl'>H6 Tags: </div>
                <div className='flex flex-col'>
                    {data.headingStructure.h6Tages.map((tag, index)=>(
                        tag.length > 0 ? <span key={index} className='me-3'> <span className='text-white font-extrabold '>-</span> {tag},</span> : <p key={index}></p>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>


        {/* Page Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Page Details</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p className='text-xl'><span className="font-semibold text-gray-300">Title:</span> <span className="text-blue-400">{data.pageInfo.title}</span> ({data.pageInfo.titleLength} chars)</p>
              <p className='text-xl'><span className="font-semibold text-gray-300">Meta Description:</span> <span className="text-blue-400">{data.pageInfo.metaDescription}</span> ({data.pageInfo.metaDescriptionLength} chars)</p>
              <p className='text-xl'><span className="font-semibold text-gray-300">HTTPS:</span> <span className="text-green-400">{data.pageInfo.https ? 'Yes' : 'No'}</span></p>
              <span className='me-2 font-semibold text-gray-300 text-xl'>Canonical URL:</span>
              <Link href={data.pageInfo.canonicalUrl} className='text-secondary hover:underline text-xl'>{data.pageInfo.canonicalUrl}</Link>
            </CardContent>
          </Card>
        </motion.div>

        {/* Open Graph Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Open Graph Tags</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p className='text-xl'><span className="font-semibold text-gray-300">Title:</span> <span className="text-blue-400">{data.openGraphTags.title}</span></p>
              <p className='text-xl'><span className="font-semibold text-gray-300">Description:</span> <span className="text-blue-400">{data.openGraphTags.description}</span></p>
              <p className='text-xl'><span className="font-semibold text-gray-300">Type:</span> <span className="text-blue-400">{data.openGraphTags.type}</span></p>
              <p className='text-xl'><span className="font-semibold text-gray-300">Site Name:</span> <span className="text-blue-400">{data.openGraphTags.siteName}</span></p>
              <span className="font-semibold text-gray-300 text-xl">URL:</span> <Link href={data.openGraphTags.url} className="text-secondary hover:underline text-xl">{data.openGraphTags.url}</Link>
            </CardContent>
          </Card>
        </motion.div>

        

        {/* Page Speed and Link Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Performance & Links</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p className='text-xl'><span className="font-semibold text-gray-300">Page Speed Score:</span> <span className="text-blue-400">{data.pageSpeedScore}</span></p>
              <p className='text-xl'><span className="font-semibold text-gray-300">Internal Links:</span> <span className="text-blue-400">{data.internalLinks}</span></p>
              <p className='text-xl'><span className="font-semibold text-gray-300">External Links:</span> <span className="text-blue-400">{data.externalLinks}</span></p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Content Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Content Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p className='text-xl'><span className="font-semibold text-gray-300">Images Count:</span> <span className="text-blue-400">{data.contentInfo.imagesCount}</span></p>
              <p className='text-xl'><span className="font-semibold text-gray-300">Images Missing Alt Tags:</span> <span className="text-red-400">{data.contentInfo.imagesMissingAltTage}</span></p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Social Links</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <ul className='ms-5'>
                {data.socialLinks.map((link, index)=>(
                    <li key={index} className='list-disc break-all overflow-hidden text-xl'>
                        <Link href={link} className='text-secondary hover:underline'><div className='bg-white inline-block w-1.5 h-1.5 rounded-4xl me-3'></div>{link}</Link>
                    </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>


        {/* Schema Markup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Schema Markup</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              {data.schemaMarkup.map((markup, index)=>(
                <span key={index} className='me-3 text-xl'>{markup},</span>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        

        
      </div>

      {/* Summary */}
      {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-5"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold border-b-4 p-1">Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-foreground">
              <ReactMarkdown>{data.summary}</ReactMarkdown>
            </CardContent>
          </Card>
        </motion.div> */}

        {/* Full Social Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-5"
        >
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Full Social Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ReactMarkdown>{data.fullSocialAnalysis}</ReactMarkdown>
            </CardContent>
          </Card>
        </motion.div>
    </div>
  );
};

export default WebsiteSWOT;