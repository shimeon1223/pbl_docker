import Head from 'next/head'
import { Divider } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
export default function kyoto(){
return(
<div>
    <div>
        <Head>
            <meta charset="UTF-8"/>
            <title>京都紹介</title>
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

    <h1 className="TITLE">京都紹介</h1> 
    <Tabs>
        <TabList>
            <Tab>清水寺</Tab>
            <Tab>千本鳥居</Tab>
            <Tab>哲学の道</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>清水寺の写真</h2>
                        <Image src="/mysite/images/京都/kiyomizudera.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical'/>
                            <div>
                                <Text fontSize='20px' color='blue'>感想</Text>
                                <Text>めちゃくちゃ人いて大変だった。</Text>
                                <Text>行くまで坂がすごかった。</Text>
                                <Text>景色は良かった。</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>


            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>千本鳥居の写真</h2>
                        <Image src="/mysite/images/京都/senhontorii.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='500px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>感想</Text>
                                <Text>人はあんまりいなかった。</Text>
                                <Text>稲荷神社の上まで行かずに仁和寺った。</Text>
                                <Text>最終日だったから疲労困憊だった。</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>哲学の道の写真</h2>
                        <Image src="/mysite/images/京都/tetsugakunomichi.jpg" className="meisho-image" alt=""/>
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>感想</Text>
                                <Text>圧倒的避暑地。</Text>
                                <Text>近所に似た緑道あるけど川があるだけで風情が出る気がする。</Text>
                                <Text>散歩によさそう。</Text>
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