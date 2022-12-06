import { Navbar} from 'react-bootstrap';

export default function FooterComponent() {
    return(
    <>
        <Navbar bg="dark" className='w-100 h-100 border rounded-0 text-white my-4'>
        <div className='mx-3 w-25'>
            <div className='my-4'>
                <a href="#/action-1" className='text-white link-footer'><h6>Список товаров</h6></a>
            </div>
            <div className='my-4'>
                <a href="#/action-2" className='text-white link-footer' ><h6>Смартфоны</h6></a>
            </div>
            <div className='my-4'>
                <a href="#/action-3" className='text-white link-footer' ><h6>Телевизоры</h6></a>
            </div>
            <div className='my-2'>
                <a href="#/action-2" className='text-white link-footer' ><h6>Стиральные машины</h6></a>
            </div>
            <div className='mt-4'>
                <a href="#/action-1" className='text-white link-footer' ><h6>Кондиционеры</h6></a>
            </div>
        
         <div className='mt-5'>
            <span className='opacity-50 '>Мы в соцмедиа</span>
        </div>
        <div className='footer-icons my-4'>
            <div className='facebook-icon me-3'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6245_2313)">
<path d="M16.6637 39.7791C7.22181 38.116 0 29.8892 0 20.0008C0 9.00004 9.00004 0 20.0008 0C31.0015 0 40 9.00004 40 20.0008C40 29.8892 32.7782 38.1129 23.3332 39.7791L22.2224 38.8939H17.7776L16.6637 39.7791Z" fill="url(#paint0_linear_6245_2313)"/>
<path d="M27.778 25.5564L28.6664 20.0008H23.3332V16.1114C23.3332 14.5557 23.8886 13.3329 26.3327 13.3329H28.8888V8.22219C27.4435 7.99972 25.8893 7.77881 24.4425 7.77881C19.8872 7.77881 16.6637 10.5574 16.6637 15.5576V20.0024H11.6666V25.558H16.6637V39.6718C18.8636 40.1162 21.1302 40.1162 23.3301 39.6718V25.5611L27.778 25.5564Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_6245_2313" x1="20.0241" y1="38.2433" x2="20.0241" y2="-0.374719" gradientUnits="userSpaceOnUse">
<stop stop-color="#0062E0"/>
<stop offset="1" stop-color="#19AFFF"/>
</linearGradient>
<clipPath id="clip0_6245_2313">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
            </svg>
            </div>
            <div className='me-3'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6245_2316)">
<path d="M20.0097 0.303589C11.7851 0.303589 9.37969 0.312073 8.91213 0.35086C7.2243 0.491159 6.17403 0.756908 5.02982 1.32659C4.14803 1.76445 3.4526 2.27201 2.76625 2.98351C1.51629 4.28104 0.758737 5.87736 0.484503 7.77488C0.351174 8.69606 0.312387 8.88394 0.304508 13.5892C0.301478 15.1577 0.304508 17.2219 0.304508 19.9906C0.304508 28.2085 0.313599 30.6115 0.352992 31.0781C0.489351 32.7205 0.746919 33.7538 1.29236 34.8841C2.33475 37.0476 4.3256 38.6718 6.67098 39.2779C7.48308 39.4869 8.38002 39.6021 9.5315 39.6566C10.0194 39.6779 14.9919 39.693 19.9676 39.693C24.9432 39.693 29.9188 39.6869 30.3945 39.6627C31.7278 39.6 32.502 39.496 33.3581 39.2748C35.7186 38.6658 37.6731 37.0658 38.7367 34.8719C39.2715 33.7689 39.5427 32.6962 39.6654 31.1396C39.6921 30.8002 39.7033 25.3892 39.7033 19.9854C39.7033 14.5807 39.6912 9.17968 39.6645 8.8403C39.5403 7.25853 39.2691 6.19493 38.717 5.07072C38.264 4.15044 37.761 3.46319 37.0307 2.76048C35.7274 1.51567 34.1335 0.758121 32.2342 0.484189C31.3139 0.351163 31.1306 0.31177 26.4216 0.303589H20.0097Z" fill="url(#paint0_radial_6245_2316)"/>
<path d="M20.0097 0.303589C11.7851 0.303589 9.37969 0.312073 8.91213 0.35086C7.2243 0.491159 6.17403 0.756908 5.02982 1.32659C4.14803 1.76445 3.4526 2.27201 2.76625 2.98351C1.51629 4.28104 0.758737 5.87736 0.484503 7.77488C0.351174 8.69606 0.312387 8.88394 0.304508 13.5892C0.301478 15.1577 0.304508 17.2219 0.304508 19.9906C0.304508 28.2085 0.313599 30.6115 0.352992 31.0781C0.489351 32.7205 0.746919 33.7538 1.29236 34.8841C2.33475 37.0476 4.3256 38.6718 6.67098 39.2779C7.48308 39.4869 8.38002 39.6021 9.5315 39.6566C10.0194 39.6779 14.9919 39.693 19.9676 39.693C24.9432 39.693 29.9188 39.6869 30.3945 39.6627C31.7278 39.6 32.502 39.496 33.3581 39.2748C35.7186 38.6658 37.6731 37.0658 38.7367 34.8719C39.2715 33.7689 39.5427 32.6962 39.6654 31.1396C39.6921 30.8002 39.7033 25.3892 39.7033 19.9854C39.7033 14.5807 39.6912 9.17968 39.6645 8.8403C39.5403 7.25853 39.2691 6.19493 38.717 5.07072C38.264 4.15044 37.761 3.46319 37.0307 2.76048C35.7274 1.51567 34.1335 0.758121 32.2342 0.484189C31.3139 0.351163 31.1306 0.31177 26.4216 0.303589H20.0097Z" fill="url(#paint1_radial_6245_2316)"/>
<path d="M20.0006 5.45496C16.0504 5.45496 15.5547 5.47223 14.0032 5.54283C12.4548 5.61374 11.3979 5.85888 10.473 6.21857C9.51641 6.59007 8.70491 7.08703 7.89645 7.89579C7.08739 8.70425 6.59043 9.51574 6.21772 10.4721C5.85712 11.3972 5.61167 12.4544 5.54198 14.0023C5.47259 15.5537 5.45441 16.0498 5.45441 20C5.45441 23.9502 5.47198 24.4444 5.54228 25.9958C5.61349 27.5443 5.85864 28.6012 6.21802 29.526C6.58983 30.4827 7.08678 31.2942 7.89555 32.1026C8.7037 32.9117 9.51519 33.4099 10.4712 33.7814C11.3967 34.1411 12.4539 34.3862 14.002 34.4571C15.5535 34.5277 16.0489 34.545 19.9988 34.545C23.9493 34.545 24.4435 34.5277 25.995 34.4571C27.5434 34.3862 28.6016 34.1411 29.527 33.7814C30.4833 33.4099 31.2936 32.9117 32.1018 32.1026C32.9108 31.2942 33.4078 30.4827 33.7805 29.5263C34.1381 28.6012 34.3835 27.544 34.4563 25.9962C34.526 24.4447 34.5441 23.9502 34.5441 20C34.5441 16.0498 34.526 15.554 34.4563 14.0026C34.3835 12.4541 34.1381 11.3972 33.7805 10.4724C33.4078 9.51574 32.9108 8.70425 32.1018 7.89579C31.2927 7.08672 30.4837 6.58977 29.5261 6.21857C28.5989 5.85888 27.5413 5.61374 25.9929 5.54283C24.4414 5.47223 23.9475 5.45496 19.9961 5.45496H20.0006ZM18.6958 8.07609C19.0831 8.07548 19.5152 8.07609 20.0006 8.07609C23.8842 8.07609 24.3444 8.09003 25.878 8.15972C27.2962 8.22457 28.0658 8.46153 28.5786 8.66062C29.2573 8.92424 29.7412 9.23939 30.25 9.74846C30.7591 10.2575 31.0742 10.7424 31.3385 11.4211C31.5376 11.9332 31.7748 12.7029 31.8394 14.1211C31.9091 15.6543 31.9242 16.1149 31.9242 19.9966C31.9242 23.8783 31.9091 24.3389 31.8394 25.8722C31.7745 27.2904 31.5376 28.06 31.3385 28.5721C31.0748 29.2509 30.7591 29.7342 30.25 30.243C29.7409 30.7521 29.2576 31.0672 28.5786 31.3308C28.0664 31.5308 27.2962 31.7672 25.878 31.832C24.3447 31.9017 23.8842 31.9169 20.0006 31.9169C16.1168 31.9169 15.6565 31.9017 14.1232 31.832C12.7051 31.7666 11.9354 31.5296 11.4224 31.3305C10.7436 31.0669 10.2588 30.7518 9.74973 30.2427C9.24066 29.7336 8.92551 29.25 8.66128 28.5709C8.46219 28.0588 8.22493 27.2891 8.16039 25.871C8.09069 24.3377 8.07675 23.8771 8.07675 19.993C8.07675 16.1089 8.09069 15.6507 8.16039 14.1174C8.22523 12.6993 8.46219 11.9296 8.66128 11.4169C8.92491 10.7381 9.24066 10.2533 9.74973 9.74422C10.2588 9.23514 10.7436 8.92 11.4224 8.65577C11.9351 8.45577 12.7051 8.21942 14.1232 8.15427C15.465 8.09366 15.985 8.07548 18.6958 8.07245V8.07609ZM27.7646 10.4912C26.801 10.4912 26.0192 11.2721 26.0192 12.236C26.0192 13.1996 26.801 13.9814 27.7646 13.9814C28.7282 13.9814 29.51 13.1996 29.51 12.236C29.51 11.2724 28.7282 10.4906 27.7646 10.4906V10.4912ZM20.0006 12.5305C15.8756 12.5305 12.5312 15.8749 12.5312 20C12.5312 24.125 15.8756 27.4679 20.0006 27.4679C24.1257 27.4679 27.4689 24.125 27.4689 20C27.4689 15.8749 24.1254 12.5305 20.0003 12.5305H20.0006ZM20.0006 15.1516C22.6781 15.1516 24.849 17.3222 24.849 20C24.849 22.6775 22.6781 24.8483 20.0006 24.8483C17.3228 24.8483 15.1523 22.6775 15.1523 20C15.1523 17.3222 17.3228 15.1516 20.0006 15.1516Z" fill="white"/>
</g>
<defs>
<radialGradient id="paint0_radial_6245_2316" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.7689 42.7268) rotate(-90) scale(39.0378 36.3181)">
<stop stop-color="#FFDD55"/>
<stop offset="0.1" stop-color="#FFDD55"/>
<stop offset="0.5" stop-color="#FF543E"/>
<stop offset="1" stop-color="#C837AB"/>
</radialGradient>
<radialGradient id="paint1_radial_6245_2316" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-6.29657 3.14114) rotate(78.6776) scale(17.4502 71.9488)">
<stop stop-color="#3771C8"/>
<stop offset="0.128" stop-color="#3771C8"/>
<stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
</radialGradient>
<clipPath id="clip0_6245_2316">
<rect width="40" height="39.9988" fill="white" transform="translate(0 0.000610352)"/>
</clipPath>
</defs>
            </svg>
            </div>
            <div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="url(#paint0_linear_6245_2320)"/>
<path d="M9.05313 19.7889C14.8835 17.2487 18.7714 15.574 20.7167 14.7649C26.2709 12.4547 27.425 12.0534 28.1773 12.04C28.3427 12.0373 28.7126 12.0783 28.9523 12.2727C29.1546 12.4369 29.2103 12.6587 29.2369 12.8143C29.2635 12.97 29.2967 13.3246 29.2703 13.6017C28.9694 16.7641 27.667 24.4386 27.0044 27.9807C26.7241 29.4794 26.1721 29.9819 25.6376 30.0311C24.4762 30.138 23.5942 29.2636 22.4693 28.5262C20.7091 27.3723 19.7146 26.654 18.006 25.528C16.0314 24.2268 17.3114 23.5116 18.4368 22.3428C18.7313 22.0369 23.8486 17.3823 23.9476 16.9601C23.96 16.9073 23.9715 16.7104 23.8546 16.6065C23.7376 16.5025 23.565 16.5381 23.4405 16.5663C23.2639 16.6064 20.4519 18.4651 15.0044 22.1423C14.2062 22.6904 13.4832 22.9574 12.8355 22.9434C12.1214 22.928 10.7477 22.5397 9.72654 22.2077C8.47404 21.8006 7.47858 21.5853 7.56526 20.8939C7.61041 20.5337 8.10637 20.1654 9.05313 19.7889Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_6245_2320" x1="20" y1="0" x2="20" y2="39.7032" gradientUnits="userSpaceOnUse">
<stop stop-color="#2AABEE"/>
<stop offset="1" stop-color="#229ED9"/>
</linearGradient>
</defs>
            </svg>
            </div>
        </div>
        <div className='footer-section mb-4'></div>
        <span className='opacity-50 my-4'>© 2022 ОАО «Алиф Банк» г. Душанбе, 101 мкр-н, ул. Багаутдинова, 9</span>
        <div className='my-4'>
                <a href="#/action-2" className='text-white link-footer' ><h6>900</h6></a>
            </div>
            <div className='mt-4'>
                <a href="#/action-1" className='text-white link-footer' ><h6>support@alif.tj</h6></a>
            </div>
        </div>
        </Navbar>
    </>
    )
}