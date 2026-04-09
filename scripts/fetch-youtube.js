import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const CHANNEL_ID = 'UCwSb-5rc3zudLrmsyJYIVTQ'

async function fetchYouTubeVideos() {
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
  
  try {
    const response = await fetch(rssUrl)
    const xml = await response.text()
    
    const videos = parseRSS(xml)
    
    fs.writeFileSync(
      path.join(rootDir, 'src/data/videos.json'),
      JSON.stringify(videos, null, 2)
    )
    
    console.log(`Fetched ${videos.length} videos`)
  } catch (error) {
    console.error('Error fetching YouTube RSS:', error.message)
    process.exit(1)
  }
}

function parseRSS(xml) {
  const videos = []
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g
  let match
  
  while ((match = entryRegex.exec(xml)) !== null) {
    const entry = match[1]
    
    const idMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)
    const titleMatch = entry.match(/<title>(.*?)<\/title>/)
    const publishedMatch = entry.match(/<published>(.*?)<\/published>/)
    const thumbMatch = entry.match(/<media:thumbnail url="(.*?)"/)
    
    if (idMatch && titleMatch) {
      const videoId = idMatch[1]
      videos.push({
        id: videoId,
        title: titleMatch[1],
        thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        date: publishedMatch ? formatDate(publishedMatch[1]) : ''
      })
    }
  }
  
  return videos.slice(0, 12)
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

fetchYouTubeVideos()