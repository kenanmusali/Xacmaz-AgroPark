import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css'
import HomeImage1 from '../../../../Public/Images/Rectangle680.png'
import HomeImage2 from '../../../../Public/Images/Rectangle682.png'
import HomeImage3 from '../../../../Public/Images/Rectangle683.png'
import HomeImage4 from '../../../../Public/Images/Rectangle681.png'
import HomeImage5 from '../../../../Public/Images/Rectangle684.png'
import HomeImage6 from '../../../../Public/Images/Rectangle685.png'

function Section() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <div className="divAboutSectionHomeMenu divNewSectionHomeMenu">
        <div className="divAboutSectionHomeMenuText">
          <p className='HomeSectionText2 HomeSectionText02 Nunito'>{language === 'az' ? 'Təzə süd' : 'Fresh milk'}</p>
          <p className='Nunito HomeSectionText3'>{language === 'az' ? 'Südçülük təsərrüfatları qlobal qidalanma üçün mühüm əhəmiyyət kəsb edən təzə süd istehsal edir və istehlakçı tələbatını ödəmək üçün sürüləri diqqətlə idarə edərək iqtisadiyyatları dəstəkləyir. Onlar həmçinin kənd icmalarında əsas rol oynayırlar, iş və dolanışıq vasitələri təmin edirlər.' : 'Dairy farms produce fresh milk, crucial for global nutrition, and support economies by carefully managing herds to meet consumer demand. They also play a key role in rural communities, providing jobs and livelihoods.'}</p>
        </div>
        <div className="GroupAboutSectionHomeMenuImg">
          <div className="divAboutSectionHomeMenuImg">
            <img src={HomeImage1} className='HomeImage1' />
          </div>
        </div>
      </div>

      <div className="LineGroup">
        <div className="lineHorizonatal"></div>
      </div>

      <div className="divAboutSectionHomeMenu divNewSectionHomeMenu ">
        <div className="GroupAboutSectionHomeMenuImg">
          <div className="divAboutSectionHomeMenuImg">
            <img src={HomeImage2} className='HomeImage1' />
          </div>
        </div>
        <div className="divAboutSectionHomeMenuText">
          <p className='HomeSectionText2 HomeSectionText02 Nunito'>{language === 'az' ? 'Ət istehsalı' : 'Meat production'}</p>
          <p className='Nunito HomeSectionText3'>{language === 'az' ? 'Heyvandarlıq canlı satış yolu ilə ət təmin edir, zülala qlobal tələbatı ödəyir, fermerlər isə heyvanları etik qaydada böyüdür, kənd təsərrüfatı iqtisadiyyatlarını və dolanışıq vasitələrini dəstəkləyir. Ət sənayesi müxtəlif sektorları, o cümlədən mal əti, quşçuluq və daha çox sahələri əhatə edir, hər biri özünəməxsus çətinlikləri və imkanları ilə.' : 'Livestock farming provides meat through live sales, meeting the global demand for protein while farmers raise animals ethically, supporting agricultural economies and livelihoods. The meat industry encompasses various sectors, including beef, poultry, and more, each with its unique challenges and opportunities.'}</p>
        </div>
      </div>

      <div className="LineGroup">
        <div className="lineHorizonatal"></div>
      </div>

      <div className="divAboutSectionHomeMenu divNewSectionHomeMenu">
        <div className="divAboutSectionHomeMenuText">
          <p className='HomeSectionText2 HomeSectionText02 Nunito'>{language === 'az' ? 'Dənlik arpa' : 'Grain barley'}</p>
          <p className='Nunito HomeSectionText3'>{language === 'az' ? 'Çox yönlü taxıl olan arpa qidada, yemdə və pivəbişirmədə istifadə olunur, əsas qida maddələrini təmin edir və kənd təsərrüfatı və sənayedə mühüm rol oynayır. Qida mənbəyi kimi arpa şorba, güveç, çörək və digər yeməklərdə istifadə olunur, lif və vitaminlər kimi vacib qidaları təmin edir.' : 'Barley, a versatile grain, is used in food, feed, and brewing, providing essential nutrients and playing a crucial role in agriculture and industry. As a food source, barley is used in soups, stews, bread, and other dishes, providing essential nutrients like fiber and vitamins.'}</p>
        </div>
        <div className="GroupAboutSectionHomeMenuImg">
          <div className="divAboutSectionHomeMenuImg">
            <img src={HomeImage3} className='HomeImage1' />
          </div>
        </div>
      </div>

      <div className="LineGroup">
        <div className="lineHorizonatal"></div>
      </div>

      <div className="divAboutSectionHomeMenu divNewSectionHomeMenu ">
        <div className="GroupAboutSectionHomeMenuImg">
          <div className="divAboutSectionHomeMenuImg">
            <img src={HomeImage4} className='HomeImage1' />
          </div>
        </div>
        <div className="divAboutSectionHomeMenuText">
          <p className='HomeSectionText2 HomeSectionText02 Nunito'>{language === 'az' ? 'Dənlik qarğıdalı' : 'Grain corn'}</p>
          <p className='Nunito HomeSectionText3'>{language === 'az' ? 'Əsas taxıl olan qarğıdalı qida, yem və sənayedə müxtəlif istifadələrə malikdir, bir çox qida məhsulunun əsas komponenti olmaqla, qarğıdalı nişastası və etanol kimi müxtəlif məhsullara emal olunur. Bundan əlavə, qarğıdalı heyvanlar üçün vacib qida və enerji təmin edən heyvan yemində istifadə olunur.' : 'Corn, a staple grain, has diverse uses in food, feed, and industry, being a major component in many food products and processed into various products like cornstarch and ethanol. Additionally, corn is used in livestock feed, providing essential nutrients and energy for animals.'}</p>
        </div>
      </div>

      <div className="LineGroup">
        <div className="lineHorizonatal"></div>
      </div>

      <div className="divAboutSectionHomeMenu divNewSectionHomeMenu">
        <div className="divAboutSectionHomeMenuText">
          <p className='HomeSectionText2 HomeSectionText02 Nunito'>{language === 'az' ? 'Şirəli yemlər(Senaj və silos)' : 'Forages (Silage and silage)'}</p>
          <p className='Nunito HomeSectionText3'>{language === 'az' ? 'Ot və ya qarğıdalı kimi bitkilərdən hazırlanan və xüsusilə təzə otlaq olmadıqda qiymətli yem kimi xidmət edən silos kimi yemlər heyvanların qidalanması və yemin qorunması üçün çox vacibdir. Silosun düzgün idarə edilməsi onun qida keyfiyyətini qorumaq və heyvanların sağlamlığını təmin etmək üçün vacibdir.' : 'Forages like silage are vital for animal nutrition and feed preservation, made from plants like grass or corn and serving as valuable feed, especially when fresh pasture is unavailable. Proper silage management is essential for maintaining its nutritional quality and ensuring animal health.'}</p>
        </div>
        <div className="GroupAboutSectionHomeMenuImg">
          <div className="divAboutSectionHomeMenuImg">
            <img src={HomeImage5} className='HomeImage1' />
          </div>
        </div>
      </div>

      <div className="LineGroup">
        <div className="lineHorizonatal"></div>
      </div>

      <div className="divAboutSectionHomeMenu divNewSectionHomeMenu ">
        <div className="GroupAboutSectionHomeMenuImg">
          <div className="divAboutSectionHomeMenuImg">
            <img src={HomeImage6} className='HomeImage1' />
          </div>
        </div>
        <div className="divAboutSectionHomeMenuText">
          <p className='HomeSectionText2 HomeSectionText02 Nunito'>{language === 'az' ? 'Yonca otu' : 'Alfalfa grass'}</p>
          <p className='Nunito HomeSectionText3'>{language === 'az' ? 'Qida maddələri ilə zəngin yem bitkisi olan yonca yüksək zülal tərkibi və torpaq sağlamlığına faydaları ilə tanınan heyvandarlıq yemində istifadə olunur. Dərin kök sistemi sayəsində torpağın sağlamlığını yaxşılaşdırmaq üçün kənd təsərrüfatında da istifadə olunur, bu da qidalanma dövriyyəsinə və eroziyaya qarşı mübarizəyə kömək edir.' : 'Alfalfa, a nutrient-rich forage crop, is used in livestock feed, known for its high protein content and soil health benefits. It is also used in agriculture to improve soil health due to its deep root system, which helps in nutrient cycling and erosion control.'}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Section