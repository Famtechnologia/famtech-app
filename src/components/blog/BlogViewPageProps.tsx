'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';


interface BlogPost {
  id: string;
  category: BlogCategory;
  title: string;
  imageUrl: string;
  snippet: string;
  date: string;
  isHero?: boolean;
  isTrending?: boolean;
  
  fullContent: string;
}

type BlogCategory = 'All' | 'AgriTech' | 'Climate' | 'Livestock' | 'Innovation' | 'Crop Health';


const allBlogPosts: BlogPost[] = [
  {
    id: 'hero-1',
    category: 'Innovation',
    title: 'How a Local Farmer Increased Yield by 40% Using Famtech Tool',
    imageUrl: '/images/blog/Innovation.jpg',
    snippet: 'This case study explores the revolutionary impact of Famtech tools on small-scale farming operations...',
    date: '3 days ago',
    isHero: true,
    fullContent: `In a remarkable stride towards agricultural modernization, a local farmer, Mrs. Adebisi,
      has achieved an astounding 40% increase in crop yield by integrating cutting-edge Famtech tools into her operations.
      This success story, unfolding in the heart of Nigeria's farming community, serves as a beacon of what's possible
      when traditional farming wisdom meets technological innovation.

      For years, Mrs. Adebisi, like many small-scale farmers, faced numerous challenges: unpredictable weather patterns,
      soil nutrient depletion, pest infestations, and limited access to real-time data. Her farm, while productive,
      often struggled to reach its full potential. The turning point came when she decided to adopt a comprehensive Famtech solution,
      which included precision irrigation sensors, AI-powered crop health monitoring, and a smart nutrient management system.

      The precision irrigation system, equipped with soil moisture sensors, ensures that water is delivered only when and where
      it's needed, drastically reducing water waste and optimizing absorption. This alone led to a significant improvement
      in crop vitality. Concurrently, the AI-powered monitoring drones provided early detection of potential diseases and
      pest outbreaks, allowing for timely and targeted interventions, thus minimizing crop loss.

      Furthermore, the smart nutrient management system analyzed soil data in real-time, recommending precise fertilizer
      applications. This not only enhanced soil health and crop growth but also reduced the overall expenditure on fertilizers,
      making the farming operation more economically viable.

      The collective impact of these technologies was transformative. Mrs. Adebisi's corn and cassava fields,
      which once yielded an average of 2.5 tons per hectare, now consistently produce over 3.5 tons.
      Beyond the quantitative increase, the quality of her produce has also seen a noticeable improvement,
      fetching better prices in the local markets.

      Mrs. Adebisi's journey underscores the immense potential of Famtech to revolutionize agriculture,
      especially for smallholder farmers. Her success is a powerful testament to how accessible and impactful
      these technologies can be, paving the way for a more sustainable and prosperous farming future.`
  },
  {
    id: 'hero-2',
    category: 'AgriTech',
    title: 'The Rise of AI-Powered Drones in Crop Monitoring',
    imageUrl: '/images/blog/digital-farming.jpg',
    snippet: 'AI-driven drones are transforming how farmers manage and monitor their crops, leading to increased efficiency...',
    date: '5 days ago',
    isHero: true,
    fullContent: `The agricultural landscape is undergoing a significant transformation, and at the forefront of this revolution
      are **AI-powered drones**. These unmanned aerial vehicles are no longer just futuristic concepts; they are becoming
      indispensable tools for modern farmers, offering unprecedented levels of precision and efficiency in crop monitoring.

      Traditionally, monitoring large tracts of farmland was a laborious and time-consuming task, often relying on manual inspections
      or satellite imagery that lacked real-time granularity. AI-powered drones, however, have changed the game entirely.
      Equipped with advanced sensors, multispectral cameras, and artificial intelligence algorithms, these drones can collect
      a vast amount of data with remarkable speed and accuracy.

      One of the primary benefits is **early disease detection**. Drones can identify subtle changes in plant health that are
      invisible to the naked eye, such as nutrient deficiencies, water stress, or the initial stages of pest infestations.
      The AI algorithms analyze the captured imagery to pinpoint problematic areas, allowing farmers to intervene proactively
      before widespread damage occurs. This early detection capability significantly reduces crop loss and the need for
      broad-spectrum pesticide applications, leading to more sustainable farming practices.

      Beyond disease detection, these drones are revolutionizing **irrigation management**. By mapping crop health variability
      across fields, they can identify areas that are over- or under-watered, enabling farmers to optimize irrigation schedules
      and conserve precious water resources. This precision irrigation not only saves water but also promotes healthier,
      more uniform crop growth.

      Furthermore, AI drones are proving invaluable in **yield prediction and plant counting**. They can accurately assess
      plant density and growth stages, providing farmers with valuable insights into potential yields. This data empowers
      farmers to make informed decisions regarding harvesting, resource allocation, and market planning.

      The integration of AI into drone technology for agriculture represents a significant leap forward.
      It enables farmers to move from reactive problem-solving to proactive management, fostering more resilient,
      efficient, and environmentally friendly food production systems.`
  },
  {
    id: 'main-1',
    category: 'Livestock',
    title: 'Innovative Tools in Livestock Farming',
    imageUrl: '/images/blog/livestock.jpg',
    snippet: 'Farms are now using smart tools to monitor livestock health and optimize breeding programs, ensuring healthier animals...',
    date: '2 days ago',
    fullContent: `The livestock industry is experiencing a technological revolution, with innovative tools transforming traditional
      farming practices into more efficient, humane, and sustainable operations. These advancements are not only improving
      animal welfare but also boosting productivity and profitability for farmers.

      One of the most significant innovations is the widespread adoption of **smart sensors and wearables for livestock**.
      These devices, often attached to an animal's ear, leg, or collar, continuously monitor vital signs, activity levels,
      and behavioral patterns. Farmers can track heart rate, body temperature, rumination, and even subtle changes in gait.
      This real-time data allows for early detection of illnesses, enabling prompt veterinary intervention and preventing
      the spread of disease within a herd. For example, a sudden drop in activity or a spike in temperature can alert a farmer
      to a potential health issue days before overt symptoms appear.

      **Automated feeding systems** are another game-changer. These systems can precisely deliver feed based on individual
      animal needs, optimizing nutrition and minimizing waste. Some advanced systems even incorporate facial recognition
      or RFID tags to ensure each animal receives its specific dietary requirements, leading to improved growth rates and
      milk production in dairy cows.

      In the realm of **breeding and reproduction**, technology is playing a crucial role.
      **Automated heat detection systems** use sensors to identify when an animal is in estrus, significantly improving
      conception rates and breeding efficiency. Genetic analysis tools are also becoming more accessible, allowing farmers
      to make more informed decisions about breeding pairs to enhance desirable traits and reduce genetic predispositions
      to certain diseases.

      Furthermore, **drones are being utilized for herd management**, especially on large pastures.
      They can quickly survey livestock, identify strays, and monitor grazing patterns, reducing the need for extensive
      manual checks. This saves time and labor, allowing farmers to allocate resources more effectively.

      These innovative tools are creating a more data-driven approach to livestock farming.
      By providing actionable insights, they empower farmers to make better decisions, ensuring healthier animals,
      optimized resource utilization, and a more sustainable future for the livestock industry.`
  },
  {
    id: 'main-2',
    category: 'AgriTech',
    title: 'AgriTech is the Future of Food Production',
    imageUrl: '/images/blog/future-of-farming.jpg',
    snippet: 'AgriTech solutions are revolutionizing the way we grow food, making it more sustainable and resilient to challenges...',
    date: '4 days ago',
    fullContent: `The global population is projected to reach nearly 10 billion by 2050, putting immense pressure on our food systems.
      Traditional agricultural methods, while foundational, are increasingly challenged by climate change, resource scarcity,
      and growing demand. This is where **AgriTech** steps in – a burgeoning sector that leverages technology to transform
      how we produce, process, and distribute food. It's not just the future; it's the present imperative for food security.

      At its core, AgriTech encompasses a wide array of innovations, from **precision agriculture** to **biotechnology** and
      **supply chain optimization**. Precision agriculture, for instance, uses sensors, drones, and AI to gather granular
      data about soil conditions, crop health, and weather patterns. This data enables farmers to apply resources like water,
      fertilizers, and pesticides with extreme accuracy, reducing waste and environmental impact while maximizing yields.
      Think of it as tailored farming, rather than a one-size-fits-all approach.

      **Vertical farming and controlled environment agriculture (CEA)** are also integral parts of the AgriTech revolution.
      These methods allow for crop cultivation in urban areas, often indoors, with optimized conditions for growth.
      This not only reduces the need for vast tracts of land but also minimizes transportation costs and allows for
      year-round production, irrespective of external climate conditions.

      **Biotechnology and genetic engineering** are enhancing crop resilience and nutritional value.
      By developing crops that are more resistant to pests, diseases, and harsh environmental conditions,
      AgriTech is helping to safeguard harvests and ensure food availability in challenging regions.
      Similarly, advancements in **alternative proteins** and **cellular agriculture** are exploring sustainable
      ways to produce food with a smaller ecological footprint.

      Beyond the farm gate, AgriTech is streamlining **supply chains** through blockchain and IoT, ensuring greater
      transparency, reducing spoilage, and enhancing food traceability from farm to fork. This not only benefits
      consumers but also helps farmers get fair prices for their produce.

      In essence, AgriTech is about creating a more **sustainable, resilient, and efficient food production system**.
      It addresses critical global challenges by harnessing the power of technology to feed a growing world,
      while preserving our planet's resources. The continuous innovation in this space promises a brighter,
      more food-secure future for everyone.`
  },
  {
    id: 'main-3',
    category: 'Climate',
    title: 'How Climate Change Affects Crop Yield',
    imageUrl: '/images/blog/sunset-weather.jpg',
    snippet: 'Climate change is altering the landscape of farming across the globe, demanding new strategies to maintain productivity...',
    date: '6 days ago',
    fullContent: `Climate change is arguably the most significant long-term threat to global food security, with its impacts
      already profoundly affecting crop yields worldwide. The intricate relationship between climate and agriculture means
      that shifts in temperature, precipitation patterns, and extreme weather events have direct and often devastating
      consequences for farmers and food production.

      One of the most apparent effects is **rising temperatures**. While some regions might initially experience
      a slight increase in growing seasons, prolonged heatwaves can stress crops, accelerate maturity, and reduce yield potential.
      For instance, critical growth stages like flowering are particularly vulnerable to high temperatures,
      leading to reduced pollination and fruit set. Higher temperatures also increase water evaporation from soil and plants,
      exacerbating drought conditions.

      **Changes in precipitation patterns** are equally disruptive. Many regions are experiencing more frequent and intense
      droughts, leading to water scarcity for irrigation and rain-fed agriculture. Conversely, other areas are witnessing
      an increase in heavy rainfall events and floods, which can drown crops, erode fertile topsoil, and delay planting or harvesting.
      The unpredictability of rainfall makes it difficult for farmers to plan and manage their crops effectively.

      **Extreme weather events** are becoming more common and severe. Hurricanes, typhoons, severe storms, and hailstorms
      can decimate entire harvests in a matter of hours. These events not only cause immediate crop loss but also damage
      agricultural infrastructure, disrupting supply chains and leading to long-term recovery challenges.

      Furthermore, climate change indirectly impacts crop yield by influencing **pest and disease dynamics**.
      Warmer temperatures can expand the geographical range of pests and pathogens, introducing new threats to crops
      that lack natural resistance. The altered timing of seasons can also disrupt natural pest controls,
      such as the life cycles of beneficial insects.

      In response to these challenges, farmers and agricultural scientists are developing adaptation strategies.
      These include cultivating **climate-resilient crop varieties**, implementing **water-efficient irrigation techniques**,
      adopting **agroforestry** and other sustainable land management practices, and utilizing **early warning systems**
      for weather and pest outbreaks. However, these adaptations require significant investment and widespread adoption
      to counteract the escalating impacts of climate change on our food supply.`
  },
  {
    id: 'main-4',
    category: 'Innovation',
    title: 'Precision Irrigation: Saving Water with IoT',
    imageUrl: '/images/blogs/agritech-robot-farming.jpg',
    snippet: 'IoT-powered irrigation systems use real-time data to minimize water waste and deliver optimal moisture to crops...',
    date: '1 week ago',
    fullContent: `Water scarcity is a growing global concern, and agriculture, as the largest consumer of fresh water,
      is at the forefront of this challenge. Traditional irrigation methods often lead to significant water waste
      due to inefficient application. However, the advent of **Precision Irrigation, powered by the Internet of Things (IoT)**,
      is revolutionizing how farmers manage water resources, ensuring optimal crop hydration while conserving this precious commodity.

      At its core, precision irrigation utilizes a network of interconnected sensors, devices, and software to provide
      real-time data and automate irrigation processes. This move from a 'one-size-fits-all' approach to a highly targeted
      one is leading to remarkable efficiencies.

      The system typically involves **soil moisture sensors** strategically placed throughout fields. These sensors continuously
      monitor the moisture content at various depths, sending this data wirelessly to a central control unit or cloud platform.
      Alongside, **weather stations** collect data on rainfall, temperature, humidity, and wind speed, providing crucial
      information about evapotranspiration rates – the amount of water lost from the soil and plants.

      All this real-time data is then analyzed by **IoT platforms and AI algorithms**. These systems can calculate the
      exact water requirements for different sections of a field, taking into account crop type, growth stage, soil type,
      and current weather conditions. Based on these calculations, the system can then precisely control automated
      irrigation systems (like drip irrigation or smart sprinklers), delivering only the necessary amount of water
      directly to the plant roots.

      The benefits are multi-faceted. Firstly, there's a dramatic **reduction in water consumption**, often by 30-50%
      compared to conventional methods, leading to significant cost savings for farmers. Secondly, by preventing
      over-irrigation, precision systems reduce nutrient leaching and runoff, thereby **minimizing environmental impact**
      and preserving soil health. Thirdly, delivering the optimal amount of water at the right time leads to **healthier crops**
      and **improved yields**, as plants are less stressed and can maximize nutrient uptake.

      Precision irrigation, powered by IoT, represents a sustainable future for agriculture. It's a testament to how technology
      can empower farmers to manage resources more wisely, contributing to both economic viability and environmental stewardship.`
  },
  {
    id: 'main-5',
    category: 'Crop Health',
    title: 'Early Detection of Crop Diseases with AI',
    imageUrl: '/images/blog/fresh-vegetables-market.png',
    snippet: 'AI-driven analytics enable farmers to identify crop diseases at their earliest stages, preventing widespread damage...',
    date: '1 week ago',
    fullContent: `Crop diseases pose a persistent and significant threat to global food security, causing substantial yield losses
      and economic hardship for farmers. Traditionally, disease detection has relied on manual inspection, which is often
      time-consuming, labor-intensive, and prone to human error, especially in large fields. By the time symptoms are
      visually apparent, the disease might have already spread, making effective intervention difficult.
      This is where **Artificial Intelligence (AI)** is revolutionizing crop health management through early and accurate disease detection.

      AI-driven systems leverage various technologies to identify disease symptoms at their nascent stages, often before they
      are visible to the human eye. The primary tools include:

      1.  **Image Recognition and Machine Vision:** Drones, satellites, and ground-based robots equipped with high-resolution
          cameras capture vast amounts of imagery of crops. AI algorithms are trained on massive datasets of healthy and
          diseased plants. They can quickly analyze these images to detect subtle changes in leaf color, texture, shape,
          or patterns indicative of specific diseases. This allows for rapid scanning of large areas that would be
          impossible for manual inspection.

      2.  **Hyperspectral and Multispectral Imaging:** These advanced cameras capture light across a much broader spectrum
          than visible light, revealing details about plant physiology that are invisible to the naked eye.
          Diseased plants often reflect and absorb light differently than healthy ones across various wavelengths.
          AI models can interpret these subtle spectral signatures to identify early onset of stress or infection.

      3.  **Sensor Networks:** Networks of IoT sensors deployed in fields can monitor environmental conditions like temperature,
          humidity, and soil moisture, which are crucial factors in disease development. AI can correlate this environmental
          data with plant health indicators to predict potential outbreaks and identify high-risk areas.

      4.  **Genomic Analysis (Emerging):** While still evolving, AI is also being applied to genomic data to identify
          disease-resistant genes in plants or to quickly detect pathogens in plant samples, offering a deeper level
          of early diagnosis.

      The benefits of AI-driven early disease detection are profound:

      * **Reduced Crop Loss:** By identifying diseases early, farmers can apply targeted treatments, preventing
        widespread damage and preserving yields.
      * **Optimized Pesticide Use:** Targeted intervention reduces the need for broad-spectrum pesticides,
        leading to more sustainable and environmentally friendly farming practices.
      * **Cost Savings:** Lower pesticide use and reduced crop loss translate directly into economic benefits for farmers.
      * **Improved Decision-Making:** Farmers receive actionable insights, enabling them to make timely and informed
        decisions regarding crop management.

      AI is empowering farmers with a powerful new weapon in the fight against crop diseases, paving the way for more
      resilient and productive agricultural systems globally.`
  },
  {
    id: 'main-6',
    category: 'Livestock',
    title: 'Smart Sensors for Cattle Health Monitoring',
    imageUrl: '/images/blog/Grazing.jpg',
    snippet: 'Wearable sensors on livestock provide continuous health data, allowing farmers to intervene quickly and improve animal welfare...',
    date: '1 week ago',
    fullContent: `The well-being and productivity of cattle are paramount to livestock farmers. Traditionally, monitoring the health
      of a large herd has been a labor-intensive task, often relying on visual inspection and reactive measures when an
      animal shows clear signs of illness. However, the integration of **smart sensors** into cattle farming is transforming
      this approach, enabling continuous, proactive health monitoring and significantly improving animal welfare and farm efficiency.

      Smart sensors for cattle come in various forms, often as **wearable devices** (e.g., ear tags, neck collars, leg bands)
      or integrated into their environment (e.g., in water troughs or feeding stations). These sensors collect a wealth
      of data in real-time, which is then transmitted wirelessly for analysis.

      Key parameters monitored by these sensors include:

      1.  **Activity and Behavior:** Sensors can track an animal's movement, resting patterns, grazing duration, and social interactions.
          Changes in these patterns can indicate lameness, discomfort, or the onset of illness. For example, reduced activity
          or isolation from the herd can be early warning signs.

      2.  **Body Temperature:** Continuous temperature monitoring can detect fever, a common indicator of infection.
          Early detection allows for prompt isolation and treatment, preventing the spread of disease within the herd.

      3.  **Rumination and Feeding Behavior:** Sensors can monitor jaw movements to assess rumination (cud chewing) time and
          feeding patterns. A decrease in rumination can be an early indicator of digestive issues or stress.
          Similarly, changes in water intake from smart troughs can flag health problems.

      4.  **Reproductive Cycles (Heat Detection):** Some sensors are specifically designed to detect subtle changes in activity
          and temperature associated with estrus (heat), significantly improving the accuracy and timing of artificial
          insemination, leading to better breeding outcomes.

      The data collected by these sensors is often processed by **AI algorithms** which can identify anomalies and patterns
      that might otherwise go unnoticed. Farmers receive alerts on their smartphones or computers, enabling them to
      intervene quickly and precisely. This proactive approach leads to:

      * **Earlier Disease Detection:** Catching illnesses in their initial stages means faster treatment, reducing
        the severity of the disease and improving recovery rates.
      * **Reduced Medication Use:** Targeted treatment based on early detection can minimize the overall use of antibiotics.
      * **Improved Animal Welfare:** Healthier animals experience less stress and discomfort, leading to a better quality of life.
      * **Increased Productivity:** Healthy cattle are more productive, whether in terms of milk yield, weight gain, or reproductive success.
      * **Labor Efficiency:** Farmers can spend less time on routine health checks and more time on other critical tasks,
        as the sensors provide continuous oversight.

      Smart sensors are transforming cattle farming into a more data-driven, efficient, and humane industry,
      benefiting both animals and farmers.`
  },
];


interface BlogViewPageProps {
  params: {
    id: string;
  };
}

const BlogViewPage: React.FC<BlogViewPageProps> = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const blogPost = allBlogPosts.find(post => post.id === id);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      },
    },
  };

  if (!blogPost) {
    return (
      <motion.div
        className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-4
          sm:px-6 lg:px-8 text-center"
        initial="hidden"
        animate="visible" // Animates on mount
        variants={containerVariants}
      >
        <motion.p className="text-2xl text-gray-700 mb-6" variants={textVariants}>
          Blog post will be available in a minute, kindly go back to the blog post page.
        </motion.p>
        <motion.div variants={textVariants}>
          <Link href='/blog'
            onClick={() => router.push('/blogs')}
            className="py-3 px-6 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 transition-colors duration-200"
            aria-label='blog page'>
            Go Back to Blog Posts
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden text-lg">
        <motion.div
          className="relative h-64 sm:h-80 md:h-96 w-full"
          variants={imageVariants}
        >
          <Image
            src={blogPost.imageUrl}
            alt={blogPost.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg fetchpriority-high loading-lazy"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x500/cccccc/333333?text=Image+Error'; e.currentTarget.onerror = null; }}
          />
        </motion.div>

        <div className="p-6 sm:p-8 md:p-10">
          <motion.span
            className="inline-block text-green-700 text-sm font-semibold mb-3 py-1
            px-3 rounded-full bg-green-100"
            variants={textVariants}
          >
            {blogPost.category}
          </motion.span>
          
          <motion.h1
            className="text-base md:text-2xl mt-24 font-extrabold text-gray-900 leading-tight mb-4"
            variants={textVariants}
          >
            {blogPost.title}
          </motion.h1>
          
          <motion.div
            className="flex items-center text-gray-500 text-sm mb-6"
            variants={textVariants}
          >
            <span className="mr-4">Published: {blogPost.date}</span>
          </motion.div>

          <motion.div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            variants={textVariants}
          >
            <p>{blogPost.fullContent}</p>
          </motion.div>

          <motion.div className="mt-8" variants={textVariants}>
            <button
              onClick={() => router.push('/blogs')}
              className="py-2 px-5 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200 text-sm font-medium"
            >
              &larr; Back to all blogs
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogViewPage;