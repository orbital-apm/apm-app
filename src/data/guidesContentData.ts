import { StaticImageData } from 'next/image';

import IntroMainImg from '@/assets/images/guides/intro/intro-1.png';
import KeycapMainImg from '@/assets/images/guides/keycaps/keycaps-1.png';
import SizesMainImg from '@/assets/images/guides/sizes/sizes-1.png';
import SwitchesMainImg from '@/assets/images/guides/switches/switches-1.png';

export interface GuidesContentParams {
  title: string;
  imgSrc: StaticImageData;
  text: string;
}

export const guidesContentData: Record<string, GuidesContentParams> = {
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
    `
  },
  keycaps: {
    title: 'a guide to keycaps.',
    imgSrc: KeycapMainImg,
    text: `
    Alright, buckle up, keyboard newbie! We're about to dive into the colorful, clicky world of keycaps. You know those little buttons you press on your keyboard? Yeah, those are keycaps, and they're way cooler than you might think! So, what's the big deal with keycaps? Well, imagine if you could change how your keyboard looks and feels just by swapping out these little plastic pieces. That's exactly what keycaps let you do!<br><br>
    First off, let's talk materials. Most keycaps are made from either ABS or PBT plastic. ABS is like the vanilla ice cream of keycaps - it's everywhere and gets the job done. But PBT? That's the gourmet stuff. It's tougher, doesn't get shiny from use, and some people swear it feels better under your fingers.<br><br>
    Now, onto the fun part - profiles! Keycap profiles are all about shape. You've got your OEM profile, which is what you'll find on most keyboards. But then there's Cherry profile, which is a bit lower and super comfy for long typing sessions. And if you want to get really wild, check out SA profile - these tall, retro-looking keycaps will make you feel like you're typing on a vintage typewriter!<br><br>
    But wait, there's more! Ever seen those keyboards that look like they're straight out of a sci-fi movie? That's all thanks to keycaps. You can get them in every color under the sun, with crazy patterns, or even custom designs. Want your space bar to be a miniature landscape? There's probably a keycap for that! And don't even get me started on artisan keycaps. These are like tiny works of art for your keyboard. We're talking hand-crafted resin sculptures that replace a single key. They can cost more than some entire keyboards, but hey, that's the price of keyboard fashion!<br><br>
    Now, I know what you're thinking: "How do I even change these things?" Good news - it's super easy! Most keycaps just pop right off with a little tool (or even your fingers if you're careful). Then you just press the new ones on. It's like Lego for grown-ups!
    One last thing to keep in mind - make sure you're getting keycaps that fit your keyboard. Different keyboards use different layouts and sizes, especially for those pesky bottom row keys. But don't worry, most keycap sets come with enough options to fit most boards.
    So there you have it - the wonderful world of keycaps! Whether you want to jazz up your typing experience, make your keyboard match your room, or just have something fun to fidget with during long Zoom calls, keycaps are your new best friend. Welcome to the rabbit hole, my friend. Your wallet might hate you, but your fingers (and eyes) will thank you!
    `
  },
  switches: {
    title: 'a guide to switches.',
    imgSrc: SwitchesMainImg,
    text: `
    Alright, keyboard rookie, it's time to get switched on to... well, switches! These little gadgets are the true MVPs of mechanical keyboards, and they're about to blow your mind.
    So, what's a switch? It's basically the mechanism under each key that registers when you've pressed it. Think of it as the heartbeat of your keyboard. Every time you tap a key, you're activating a switch. Cool, right?<br><br>
    Now, here's where it gets fun. There are more types of switches out there than flavors at an ice cream parlor, but let's break 'em down into three main categories:<br><br>
    1. Linear: These are the smooth operators. When you press down, it's one continuous motion - no bumps, no clicks, just a smooth ride all the way down. Gamers often love these because they're fast and consistent.<br><br>
    2. Tactile: Imagine driving over a speed bump - that's what tactile switches feel like. There's a little bump partway through the keystroke that lets you know, "Yep, you've activated the key!" It's like a little high-five for your fingers.<br><br>    
    3. Clicky: These are the loud and proud switches. Not only do you feel a bump, but you hear a satisfying "click" too. It's like your keyboard is applauding every letter you type. Just maybe don't use these in a quiet library!<br><br>
    Now, within these categories, there's a whole world of variation. You've got switches that are light as a feather, and others that feel like you're pushing through peanut butter. Some have a bump so subtle it's like a whisper, others feel like you're popping bubble wrap with every keystroke.
    The most famous switch maker is Cherry, with their MX line. Cherry MX Reds are smooth linear switches, Browns are tactile, and Blues are the classic clicky type. But there's a whole rainbow of other colors, each with its own feel.
    But wait, there's more! You've got boutique switch makers like Gateron, Kailh, and Zealpc creating switches that'll make your fingers sing. Some switches even let you swap out springs or stems to customize the feel even further. It's like building your own little finger playground!
    Here's a pro tip: before you commit to a whole keyboard of one switch, try a switch tester. It's like a sampler platter for your fingers, letting you try out different switches to see what tickles your fancy.<br><br>
    And get this - some keyboards now let you hot-swap switches. That means you can pop different switches in and out without soldering. It's like being able to change the engine in your car just by opening the hood!<br><br>
    So there you have it - the wonderful world of switches. Whether you want a keyboard that feels like typing on clouds, or one that gives you a mini finger workout with every email, there's a switch out there for you. Welcome to the club, switch newbie. Your fingers are about to go on the adventure of a lifetime!
    `
  },
  sizes: {
    title: 'a guide to keyboard sizes.',
    imgSrc: SizesMainImg,
    text: `Alright, keyboard curios, let's talk size! Because in the world of mechanical keyboards, size definitely matters - but maybe not in the way you think. Buckle up, because we're about to go on a tour of keyboard sizes and layouts that'll make your head spin (in a good way)!<br><br>
    First up, let's talk about the big daddy of keyboards - the full-size or 100% keyboard. This is probably what you're used to seeing. It's got everything: alphanumeric keys, function keys, a numpad, and those handy navigation keys. It's like the SUV of keyboards - spacious and fully loaded.<br><br>
    But what if you want something a bit more compact? Enter the TKL, or tenkeyless keyboard. It's basically a full-size keyboard that said "sayonara" to the numpad. It gives you more desk space and brings your mouse closer to your hands. It's like the sporty coupe version of a keyboard.
    Now, let's get really compact with the 75% keyboard. It's similar to a TKL, but everything's squished together like sardines in a can. You still get your function keys and arrows, but in a much tighter package. It's perfect for those who want it all but in a smaller footprint.<br><br>
    Feeling even more minimalist? Check out the 65% layout. It ditches the function row but keeps the arrow keys. It's like the TKL went on a diet. You get most of the functionality in an even smaller package.
    But wait, we can go smaller! The 60% keyboard is where things get really interesting. No function keys, no arrows, no numpad - just the bare essentials. But don't worry, all those missing keys are still accessible through function layers. It's like keyboard inception - keyboards within keyboards!<br><br>
    And for the true minimalists, there are even 40% keyboards. These make 60% boards look bloated! They're so small you might mistake them for a large sandwich, but they pack a punch with multiple layers of functionality.
    Now, let's throw a curveball - ortholinear keyboards. Instead of staggered keys like traditional keyboards, these have all the keys in perfect grid alignment. It's like your keyboard decided to get all OCD on you. Some people swear it makes typing more efficient once you get used to it.
    And we can't forget about split keyboards! These are exactly what they sound like - keyboards split down the middle. You can position each half however you like for maximum ergonomic comfort. It's like your keyboard is doing yoga!<br><br>
    But wait, there's more! You've got ergonomic keyboards with all sorts of weird and wonderful shapes, programmable macro pads that are like little keyboard sidekicks, and even one-handed keyboards for the true keyboard ninjas.
    The best part? Many of these come in hot-swappable versions, so you can mix and match switches to your heart's content. It's like being able to change not just the engine in your car, but the entire drivetrain on a whim!
    So there you have it - the wild and wonderful world of keyboard sizes and layouts. Whether you want a keyboard that dominates your desk or one that could fit in your pocket, there's a size and layout out there for you. <br><br>
    Welcome to the world where size doesn't just matter - it's everything!
    `
  }
};
