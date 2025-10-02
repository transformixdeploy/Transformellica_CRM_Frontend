"use client";

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import ReactMarkdown from 'react-markdown'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {localStorageDataNames} from "@/lib/constants";
import { ReanalyzeButton } from '@/components/ReanalyzeButton';
import CircularProgress  from '@/components/CicrularProgress';


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
          <h1 className="text-5xl font-extrabold text-center text-white mb-4">
            Website optimization analytics
          </h1>
        <div className="flex justify-center">
          <ReanalyzeButton onClick={handleDeleteAnalysis}/>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        

        {/* Heading Structure */}
        {/* <motion.div
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
        </motion.div> */}

        {/* Performance Metrics with Circular Progress */}
        <div className='lg:col-span-2'>
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {/* Page Speed Score with Progress */}
                <CircularProgress
                  value={data.pageSpeedScore}
                  maxValue={100}
                  size={140}
                  strokeWidth={10}
                  color="#f97316" // Orange color
                  showProgress={true}
                  label="Page Speed Score"
                />
                
                {/* Internal Links - Full Circle */}
                <CircularProgress
                  value={data.internalLinks}
                  size={140}
                  strokeWidth={10}
                  color="#10b981" // Green color
                  showProgress={false}
                  label="Internal Links"
                />
                
                {/* External Links - Full Circle */}
                <CircularProgress
                  value={data.externalLinks}
                  size={140}
                  strokeWidth={10}
                  color="#3b82f6" // Blue color
                  showProgress={false}
                  label="External Links"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Full Social Analysis */}
        <div className="lg:col-span-2">
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Full Website Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ReactMarkdown>{data.fullSocialAnalysis}</ReactMarkdown>
            </CardContent>
          </Card>
        </div>


        {/* Page Info */}
        <div>
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Page Details</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p className='text-xl'><span className="font-semibold text-gray-300">Title:</span> <span className="text-blue-400">{data.pageInfo.title}</span> ({data.pageInfo.titleLength} chars)</p>
              <p className='text-xl'><span className="font-semibold text-gray-300">Meta Description:</span> <span className="text-blue-400">{data.pageInfo.metaDescription}</span> ({data.pageInfo.metaDescriptionLength} chars)</p>
              <p className='text-xl'><span className="font-semibold text-gray-300">HTTPS:</span> <span className={`${data.pageInfo.https ? "text-green-500" : "text-red-500"} font-bold`}>{data.pageInfo.https ? 'Yes' : 'No'}</span></p>
              <span className='me-2 font-semibold text-gray-300 text-xl'>Canonical URL:</span>
              <Link href={data.pageInfo.canonicalUrl} className='text-secondary hover:underline text-xl'>{data.pageInfo.canonicalUrl}</Link>
            </CardContent>
          </Card>
        </div>

        {/* Open Graph Tags */}
        <div>
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
        </div>


        {/* Content Info */}
        <div>
          <Card className="bg-gray-800 rounded-lg shadow-xl border border-gray-700">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4 text-center">Content Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p className='text-xl'><span className="font-semibold text-gray-300">Images Count:</span> <span className="text-blue-400">{data.contentInfo.imagesCount}</span></p>
              <p className='text-xl'><span className="font-semibold text-gray-300">Images Missing Alt Tags:</span> <span className="text-red-400">{data.contentInfo.imagesMissingAltTage}</span></p>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div>
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
        </div>


        {/* Schema Markup */}
        {/* <motion.div
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
        </motion.div> */}

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
    </div>
  );
};

export default WebsiteSWOT;