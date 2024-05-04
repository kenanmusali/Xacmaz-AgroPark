import React, { useContext } from 'react';
import { LanguageContext } from '../../Assets/Language';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function Info() {

    // Language
    const { language } = useContext(LanguageContext);

    return (
        <div>
            <div className="divNewsAddBarContainer reset00">
                <div className="divbarnewssection2 reset0">
                    <div className="divCareerBarContainer ">
                        <div className="divcareerbar1">
                            <p className="NewsText1 Nunito">{language === 'az' ? 'Əlaqə' : 'Contact'}</p>
                            <p className="Nunito Newsdecp1">{language === 'az' ? 'Suallarınız və ya yardımınız üçün əlaqə formamız vasitəsilə bizimlə əlaqə saxlamaqdan çekinmeyin' : 'For questions or assistance, feel free to reach out to us via our contact form'}</p>
                            <div className="divNewsTimeZone reset reset1">
                                <p className="divNewsTime">+994 50 123 45 67</p>
                                <p className="divNewsTime">+994 70 123 45 67</p>
                                <p className="divNewsTime">info@xacmazagro.az</p>
                            </div>
                        </div>
                        <div className="divLine"></div>
                        <div className="divcareerbar1">
                            <p className="NewsText1 Nunito">{language === 'az' ? 'Bizi izlə!' : 'Follow us!'}</p>
                            <div className="divNewsTimeZone reset">
                                <EmailIcon />
                                <InstagramIcon />
                                <FacebookOutlinedIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info