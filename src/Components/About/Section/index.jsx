import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css'

function Section() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div id="about">
        <div className="container">
          <p className='Nunito'>
          {language === 'az' ? 'Müştərilərimizin davamlı əkinçilik təcrübələri, kənd təsərrüfatı innovasiyaları və kənd yerlərinin inkişafı ilə bağlı mesajlarının müxtəlif media kanalları vasitəsilə nəzərdə tutulan auditoriyaya effektiv şəkildə çatmasını təmin edərək, aqrobiznes kommunikasiyaları üzrə ixtisaslaşmışıq.' : 'We specialize in agribusiness communications, ensuring that our clients\' messages about sustainable farming practices, agricultural innovations, and rural development reach their intended audiences effectively through various media channels. '}
          </p>
          <p className='Nunito'>
          {language === 'az' ? 'Komandamız müasir kənd təsərrüfatının əhəmiyyətini, fermerlərin üzləşdiyi çətinlikləri və sənayedə artım və səmərəliliyi təmin edən həlləri vurğulayan cəlbedici hekayələr hazırlamaqla aqrobiznes kommunikasiyalarını təkmilləşdirməyə sadiqdir.' : 'Our team is dedicated to enhancing agribusiness communications by crafting compelling narratives that highlight the importance of modern agriculture, the challenges faced by farmers, and the solutions that drive growth and efficiency in the industry. '}
          </p>
          <p className='Nunito'>
          {language === 'az' ? 'Aqrobiznes sektorunu dərindən dərk etməklə, biz kənd təsərrüfatı müəssisələrinin səsini gücləndirən, qabaqcıl əkinçilik texnologiyalarının üstünlüklərini təşviq edən və istehsalçılar, istehlakçılar və maraqlı tərəflər arasında əlaqələri gücləndirən uyğunlaşdırılmış kommunikasiya strategiyaları təqdim edirik.' : 'With a deep understanding of the agribusiness sector, we provide tailored communications strategies that amplify the voices of agricultural enterprises, promote the benefits of advanced farming technologies, and foster connections between producers, consumers, and stakeholders. '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section