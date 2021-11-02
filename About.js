import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import img from './assets/NYUgradshotHandshake3.PNG';


const blockA= `
  滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中。
  是非成败转头空，青山依旧在，惯看秋月春风。一壶浊酒喜相逢，古今多少事，滚滚长江东逝水，浪花淘尽英雄。 几度夕阳红。白发渔樵江渚上，都付笑谈中.......
`;

const blockB= `
  Thousand Character Classic - Wikipedia, a poetry that was used to teach children to read in ancient times is also used as Chinese lorem ipsum:

  天地玄黄 宇宙洪荒 日月盈昃 辰宿列张 寒来暑往 秋收冬藏

  闰馀成岁 律吕调阳 云腾致雨 露结为霜 金生丽水 玉出昆冈

  剑号巨阙 珠称夜光 果珍李柰 菜重芥姜 海咸河淡 鳞潜羽翔

  龙师火帝 鸟官人皇 始制文字 乃服衣裳 推位让国 有虞陶唐

  …………
`;

export default function AboutGlobo() {
  return(
    <View style={styles.container}>
      <ScrollView>
        <Image source={img} style={{ width: '100%', height: 300 }} />
        <Text style={styles.heading}>We are Different</Text>
        <Text style={styles.text}>{blockA}</Text>
        <Image source={img} style={{ width: '100%', height: 300 }} />
        <Text style={styles.heading}>Leaders in our field</Text>
        <Text style={styles.text}>{blockB}</Text>
        <Image source={img} style={{ width: '100%', height: 300 }} />
        <Text style={styles.heading}>We are the Experts</Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  heading: {
    // fontFamily: 'OpenSans',
    fontWeight: 'bold',
    paddingTop: 5
  },
  text: {
    // fontFamily:'OpenSans'
  }
})
