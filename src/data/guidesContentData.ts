import { StaticImageData } from 'next/image';

import IntroMainImg from '@/assets/images/guides/intro/intro-1.png';

export interface GuidesContentParams {
  title: string;
  imgSrc: StaticImageData;
  text: string;
}

export const guidesContentData: { [key: string]: GuidesContentParams } = {
  intro: {
    title: 'intro to mechanical keyboards.',
    imgSrc: IntroMainImg,
    text: `
    Hey there! So you've heard about mechanical keyboards and want to know what all the fuss is about? Well, you're in for a treat! Let me break it down for you in a way that'll make sense even if you've never touched one of these bad boys before.<br><br>
    First things first: what makes a keyboard "mechanical"? It's all about what's happening under those keycaps. You know how your regular keyboard feels kinda mushy when you press a key? That's because it's using a rubber dome under there. Mechanical keyboards, on the other hand, have individual switches for each key. These switches are like tiny, precise machines that make your typing experience way more satisfying.<br><br>
    Now, why should you care? Well, imagine typing on a keyboard that feels like it's responding to your every touch. Each keystroke is crisp, clear, and oddly satisfying. It's like upgrading from a bicycle to a sports car – you didn't know what you were missing until you tried it.<br><br>
    But here's where it gets really cool: customization. With mechanical keyboards, you can choose how your keys feel. Want a soft, smooth press? There's a switch for that. Prefer a clicky, tactile feedback that lets you know exactly when you've hit the key? Yep, there's a switch for that too. It's like building your own perfect typing experience.<br><br>
    And we haven't even talked about looks yet! Mechanical keyboards come in all sorts of styles. Want something that lights up like a Christmas tree? Done. Prefer a sleek, professional look? No problem. You can even mix and match keycaps to create your own unique style.<br><br>
    Now, I know what you're thinking: "This sounds expensive." And yeah, some mechanical keyboards can cost a pretty penny. But here's the thing – they're built to last. While your regular keyboard might give up the ghost after a year or two, a good mechanical keyboard can keep clicking away for a decade or more.<br><br>
    So, are you ready to dive into the world of mechanical keyboards? Trust me, once you start, you'll wonder how you ever typed on anything else. It's not just about typing faster or more accurately (though that can happen too). It's about enjoying every single keystroke. Welcome to your new obsession!
    `,
  },
};
