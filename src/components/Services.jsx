import service_1 from '../../public/assets/service-1.svg'
import service_2 from '../../public/assets/service-2.svg'
import service_3 from '../../public/assets/service-3.svg'
import service_4 from '../../public/assets/service-4.svg'
import service_5 from '../../public/assets/service-5.svg'
import service_6 from '../../public/assets/service-6.svg'
import service_7 from '../../public/assets/service-7.svg'
import service_8 from '../../public/assets/service-8.svg'

import ServiceCard from './ServiceCard'


const Services = () => {
    const service = [
        {
            image: service_1,
            title: 'סיעור מוחות עם חמורבי, עוזר משפטי מומחה',
            desc: 'מחקר משפטי וחידוד הטענות המשפטיות שלך מעולם לא היו קלים יותר. שוחח עם חמורבי בזמן אמת כדי לקבל תובנות, הסברים ורעיונות יצירתיים ומפתיעים להשגת יתרון על יריביך. אם חשבת שמערכות אחרות מסוגלות להתמודד עם חמורבי, כדאי שתקרא מה אומרים GPT וקלוד על איכות התשובות של חמורבי.',
        },
        {
            image: service_2,
            title: 'הערכת סיכוי התיק',
            desc: 'חמורבי מאומן לבצע הערכת סיכויים של תיקים המתנהלים בבית המשפט או במסגרת בוררות. חיזוי תוצאות התיק נשען על ניתוח התיק ועובדותיו, פעולות הצדדים והטמעת הפרטים במודלים הנשענים על מחקרים סטטיטיים ודרכי קבלת החלטות במערכת המשפטית. המערכת מסוגלת להמליץ על ביצוע פעולות מסוימות לשם שיפור חוזקות התיק.',
        },
        {
            image: service_3,
            title: 'ניתוח הסכמים וטיוטות במהלך מו”מ',
            desc: 'חמורבי מסוגל לנתח טיוטות הסכמים, לאבחן שינויים תחביריים, משפטיים, רעיוניים, עיסקיים ואת האינטרסים שיתכן ועומדים מאחורי הצעותיו של הצד שכנגד. בנוסף, חמורבי מסוגל להמליץ על דרכי פעולה במצבים מסויימים. ',
        },
        {
            image: service_4,
            title: 'הכנה לדיון בבית משפט',
            desc: 'כמה פעמים שאלת את עצמך מה תאמר בבימ”ש בדיון הבא? חמורבי מאומן לסייע בהכנת טיעונים לוגיים לדיונים ולהקטין את אי הוודאות הנלווית לדיוני בית משפט. לדיון הבא תוכל להגיע עם תובנות ממוקדות מטרה וטענות מפתיעות.',
        },
        {
            image: service_5,
            title: 'סיכום מסמכים ארוכים ומורכבים, זיקוק נקודות מפתח והשוואה בין טיעונים',
            desc: 'חמורבי מסוגל להציג סיכום קצר של מסמך ארוך ומורכב (עד היקף של ספר) בשפה עברית מעולה, לזקק מתוך המסמך תובנות, עקרונות ונקודות מפתח ולבצע השוואה בין שני (או יותר) מסמכים הסותרים זה את זה או תומכים זה בזה.',
        },
        {
            image: service_6,
            title: 'תכנון אסטרטגי וטקטי של חקירה נגדית',
            desc: 'חמורבי מאומן לסייע לך לערוך חקירה נגדית, תוך זיהוי של טיעונים בלתי סבירים, סתירות בגירסאות הצד שכנגד ובעיות במטריה הראייתית.',
        },
        {
            image: service_7,
            title: 'פיתוח טיעונים ועילות חדשניות',
            desc: 'חמורבי מסוגל ליצור עבורך טיעונים חדשים ועילות מודרניות המוגדרות בשפה מדויקת ולוגית, ונסמכות על עקרונות משפטיים ידועים. חמורבי מסוגל לסייע לך לקדם את הדיון המשפטי ויצירת תקדימים, אפילו בנושאים פשוטים ובלתי מורכבים. ',
        },
        {
            image: service_8,
            title: 'מנוע המלצות לכתבי טענות',
            desc: 'חמורבי מסוגל לנתח כתבי טענות של הצדדים, לעמוד על חוזקות וחולשות של כל צד ולהמליץ לך כיצד להתמודד עם הקשיים, וכיצד לנצל את החולשות שבטיעוני הצד שכנגד, לצורך שיפור סיכויי ההתמודדות בבית המשפט ובערכאות דיוניות אחרות.',
        }
    ]

    return (
        <div dir="rtl" className="my-2 md:my-20">
            <div>
                <h1 className="text-center text-[64px]">יישומים</h1>
                <p className="text-[#464349] text-center text-[24px]">אלו הן רק כמה מהתכונות שתיישמו באמצעות חמורבי.*</p>
            </div>


            <div className='my-20 mx-2  md:mx-20 flex flex-col gap-4'>
                {
                    service.map((item, index) => (<ServiceCard key={index} index={index} image={item.image} title={item.title} desc={item.desc} />))
                }
            </div>


        </div>
    )
}

export default Services