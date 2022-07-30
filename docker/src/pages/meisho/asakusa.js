import Head from 'next/head'
import { Divider } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
export default function kyoto(){
return(
<div>
    <div>
        <Head>
            <meta charset="UTF-8"/>
            <title>浅草紹介</title>
        </Head>
    </div>
    <header className="page-header">
        <h1><Link href="/">名所紹介</Link></h1>
        <nav>
            <ul className="main-nav">
                <li><Link href="/meisho/asakusa">浅草</Link></li>
                <li><Link href="/meisho/kyoto">京都</Link></li>
                <li><Link href="/meisho/shinjuku">新宿</Link></li>
                <li><Link href="/meisho/disney">ディズニー</Link></li>
                <li><Link href="/meisho/nikko">日光</Link></li>
            </ul>
        </nav>
    </header>

    <h1 className="TITLE">浅草紹介</h1> 
    <Tabs>
        <TabList>
            <Tab>雷門</Tab>
            <Tab>五重塔</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>雷門の写真</h2>
                        <Image src="/mysite/images/浅草/kaminarimon.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='30px' color='blue'>説明</Text>
                                <Text>浅草の象徴的存在である、雷門。</Text>
                                <Text>その真正面からの一枚。</Text>
                                <Text>さすがの人気ぶりでものすごい人混みが写真からも見て取れる。</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>


            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>五重塔の写真</h2>
                        <Image src="/mysite/images/浅草/7904.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='500px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>説明</Text>
                                <Text>雷門を通ったあと、数分ほどで見えてくる五重塔。</Text>
                                <Text>快晴に映える立ち姿に思わず一枚。</Text>
                                <Text>周辺の雰囲気からも趣が伺える建築だ。</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>

        </TabPanels>
    </Tabs>
</div>
);
    
}