import {Dancing_Script, Heebo, Merriweather } from "next/font/google"

/*
CSS rules to specify families 
font-family: 'Dancing Script', cursive;
font-family: 'Heebo', sans-serif;
font-family: 'Merriweather', serif;
*/

export const merriweather = Merriweather({subsets:["latin"], weight:"400", variable:"--font-merriweather" })

export const dancingScript = Dancing_Script({subsets:["latin"], weight:"400",variable:"--font-dancingScript"})

export const heebo = Heebo({subsets:["latin"],weight:"400", variable:"--font-heebo"})


