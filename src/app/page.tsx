import Link from 'next/link';
import type { Post } from '@/types';
import BlogSearch from '@/components/BlogSearch';

const getPosts = async (): Promise<Post[]> => {
  return [
    {
      slug: 'first-post',
      title: 'اولین پست وبلاگ من',
      date: '2024-01-15',
      excerpt: 'این یک خلاصه کوتاه از اولین پست وبلاگ شگفت انگیز من است...',
      content:
        'این محتوای کامل اولین پست وبلاگ شگفت انگیز من است. بسیار طولانی تر از گزیده است و شامل تمام جزئیات است.',
      comments: []
    },
    {
      slug: 'second-post',
      title: 'بررسی Next.js 14',
      date: '2024-01-20',
      excerpt:
        'یک شیرجه عمیق به ویژگی های جدید Next.js 14 و اینکه چگونه می توانند گردش کار توسعه شما را بهبود بخشند.',
      content:
        'Next.js 14 چندین ویژگی هیجان انگیز از جمله کامپوننت های سرور بهبود یافته، زمان ساخت سریعتر و موارد دیگر را معرفی می کند. بیایید آنها را بررسی کنیم...',
      comments: []
    },
    {
      slug: 'tailwind-tricks',
      title: 'ترفندهای مفید Tailwind CSS',
      date: '2024-01-25',
      excerpt:
        'برخی از ابزارهای کمتر شناخته شده Tailwind CSS و تکنیک هایی برای سرعت بخشیدن به استایل دهی خود را کشف کنید.',
      content:
        'Tailwind CSS قدرتمند است، اما کلاس های کاربردی و الگوهای زیادی وجود دارد که می تواند استایل دهی شما را کارآمدتر کند. در اینجا چند ترفند وجود دارد...',
      comments: []
    },

    {
      slug: 'another-tailwind-post',
      title: 'ترفندهای بیشتر Tailwind CSS',
      date: '2024-01-28',
      excerpt:
        'نکات و ترفندهای بیشتر برای تسلط بر Tailwind CSS برای پروژه های شما.',
      content:
        'در ادامه پست قبلی ما، در اینجا ترفندهای اضافی Tailwind CSS برای بهبود گردش کار شما آورده شده است.',
      comments: []
    },
    {
      slug: 'yet-another-tailwind-post',
      title: 'Tailwind CSS پیشرفته',
      date: '2024-02-01',
      excerpt:
        'بردن Tailwind CSS به سطح بعدی با پیکربندی ها و پلاگین های پیشرفته.',
      content:
        'موضوعات پیشرفته Tailwind CSS مانند تم های سفارشی، پلاگین ها و بهینه سازی برای تولید را کاوش کنید.',
      comments: []
    }
  ];
};

export default async function HomePage() {
  const posts: Post[] = await getPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col">
      <header className="p-4 sm:p-6 border-b border-slate-700">
        <nav className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl  font-extrabold hover:text-sky-400 transition-colors"
          >
            به وبلاگ آموزشی خوش آمدید
          </Link>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <section className="text-center mb-12 sm:mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
            به <span className="text-sky-400">وبلاگ</span> خوش آمدید
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            آموزش وبلاگینگ با استفاده از Next.js و Tailwind CSS
          </p>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center sm:text-right">
            آخرین پست ها
          </h2>
          <BlogSearch posts={posts} />
        </section>
      </main>

      <footer
        className="px-4 bg-gradient-to-r  from-[#0a1f44] via-[#123c69] to-[#0d1321]
"
      >
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              {/*<img src="/logo.png" alt="logo" className="mr-5 h-6 sm:h-9" />*/}
              <p className="max-w-xs mt-4 text-sm text-gray-100">
                سایت وبلاگ آموزشی جهت توسعه مهارت فردی
              </p>
              <div className="mt-4">
                <ul className="flex gap-4 items-center">
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <button
                        aria-label="ایکون"
                        className="text-gray-600 hover:text-pink-500"
                        type="button"
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.49435 12.74C8.49435 10.3947 10.3951 8.49299 12.7405 8.49299C15.0859 8.49299 16.9877 10.3947 16.9877 12.74C16.9877 15.0853 15.0859 16.987 12.7405 16.987C10.3951 16.987 8.49435 15.0853 8.49435 12.74ZM6.19841 12.74C6.19841 16.3531 9.1273 19.2818 12.7405 19.2818C16.3537 19.2818 19.2826 16.3531 19.2826 12.74C19.2826 9.12694 16.3537 6.19816 12.7405 6.19816C9.1273 6.19816 6.19841 9.12694 6.19841 12.74ZM18.0127 5.93878C18.0124 6.78311 18.6966 7.46785 19.541 7.46819C20.3854 7.46853 21.0701 6.78433 21.0705 5.94C21.0708 5.09567 20.3866 4.41093 19.5422 4.41059C18.6982 4.41098 18.0135 5.09485 18.0127 5.93878ZM7.59334 23.1101C6.3512 23.0535 5.67605 22.8466 5.22738 22.6718C4.63255 22.4402 4.20814 22.1644 3.76192 21.7188C3.31569 21.2733 3.03948 20.8493 2.80893 20.2545C2.63402 19.806 2.42712 19.1307 2.37065 17.8886C2.30889 16.5457 2.29655 16.1423 2.29655 12.7401C2.29655 9.33791 2.30991 8.93563 2.37065 7.59161C2.42722 6.34951 2.63565 5.67552 2.80893 5.22574C3.0405 4.63094 3.3163 4.20654 3.76192 3.76034C4.20753 3.31413 4.63153 3.03793 5.22738 2.80739C5.67585 2.63249 6.3512 2.42559 7.59334 2.36913C8.9363 2.30737 9.33971 2.29503 12.7405 2.29503C16.1413 2.29503 16.5451 2.30839 17.8892 2.36913C19.1314 2.4257 19.8054 2.63412 20.2552 2.80739C20.85 3.03793 21.2744 3.31474 21.7206 3.76034C22.1669 4.20593 22.4421 4.63094 22.6736 5.22574C22.8485 5.67419 23.0554 6.34951 23.1119 7.59161C23.1737 8.93563 23.186 9.33791 23.186 12.7401C23.186 16.1423 23.1737 16.5446 23.1119 17.8886C23.0553 19.1307 22.8474 19.8058 22.6736 20.2545C22.4421 20.8493 22.1662 21.2737 21.7206 21.7188C21.275 22.164 20.85 22.4402 20.2552 22.6718C19.8067 22.8467 19.1314 23.0536 17.8892 23.1101C16.5463 23.1718 16.1428 23.1842 12.7405 23.1842C9.33818 23.1842 8.93589 23.1718 7.59334 23.1101ZM7.48785 0.0771534C6.13155 0.138917 5.20475 0.353968 4.39537 0.668901C3.55715 0.994128 2.84755 1.43045 2.13847 2.13838C1.42938 2.84632 0.994167 3.55701 0.668928 4.3952C0.353982 5.20505 0.138923 6.1313 0.0771565 7.48755C0.0143713 8.84594 0 9.28022 0 12.74C0 16.1998 0.0143713 16.6341 0.0771565 17.9924C0.138923 19.3488 0.353982 20.2749 0.668928 21.0848C0.994167 21.9225 1.42949 22.634 2.13847 23.3416C2.84745 24.0492 3.55715 24.485 4.39537 24.8111C5.20628 25.126 6.13155 25.3411 7.48785 25.4028C8.84701 25.4646 9.2806 25.48 12.7405 25.48C16.2004 25.48 16.6347 25.4656 17.9932 25.4028C19.3496 25.3411 20.2758 25.126 21.0856 24.8111C21.9234 24.485 22.6335 24.0496 23.3426 23.3416C24.0516 22.6337 24.4859 21.9225 24.8121 21.0848C25.127 20.2749 25.3431 19.3487 25.4039 17.9924C25.4656 16.633 25.48 16.1998 25.48 12.74C25.48 9.28022 25.4656 8.84594 25.4039 7.48755C25.3421 6.1312 25.127 5.20454 24.8121 4.3952C24.4859 3.55752 24.0505 2.84744 23.3426 2.13838C22.6346 1.42933 21.9234 0.994128 21.0867 0.668901C20.2758 0.353968 19.3495 0.137898 17.9942 0.0771534C16.6357 0.0153899 16.2014 0 12.7415 0C9.28161 0 8.84701 0.0143707 7.48785 0.0771534Z"
                            fill="url(#paint0_radial_1_4)"
                          />
                          <defs>
                            <radialGradient
                              id="paint0_radial_1_4"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(54.1649 409.606) scale(532.213)"
                            >
                              <stop offset="0.09" stopColor="#FA8F21" />
                              <stop offset="0.78" stopColor="#D82D7E" />
                            </radialGradient>
                          </defs>
                        </svg>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <button
                        aria-label="ایکون"
                        className="text-gray-100 hover:text-blue-600"
                        type="button"
                      >
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.604 0.5H3.636C1.62789 0.5 0 2.12789 0 4.136V21.104C0 23.1121 1.62789 24.74 3.636 24.74H20.604C22.6121 24.74 24.24 23.1121 24.24 21.104V4.136C24.24 2.12789 22.6121 0.5 20.604 0.5Z"
                            fill="#0077B5"
                          />
                          <path
                            d="M6.72281 8.78516C7.69026 8.78516 8.47453 8.00088 8.47453 7.03344C8.47453 6.06599 7.69026 5.28172 6.72281 5.28172C5.75536 5.28172 4.97109 6.06599 4.97109 7.03344C4.97109 8.00088 5.75536 8.78516 6.72281 8.78516Z"
                            fill="white"
                          />
                          <path
                            d="M11.5519 9.68468V19.0587ZM6.72281 9.68468V19.0587Z"
                            fill="white"
                          />
                          <path
                            d="M11.5519 9.68468V19.0587M6.72281 9.68468V19.0587"
                            stroke="white"
                            strokeWidth="3"
                          />
                          <path
                            d="M13.0669 13.8509C13.0669 12.9041 13.6823 11.9572 14.7712 11.9572C15.9075 11.9572 16.3336 12.8094 16.3336 14.0877V19.0587H19.4583V13.7089C19.4583 10.8209 17.9433 9.49531 15.8602 9.49531C14.2505 9.49531 13.4456 10.3948 13.0669 11.0103"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <button
                        aria-label="ایکون"
                        className="text-gray-100 hover:text-blue-600"
                        type="button"
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 12.62C0 19.5899 5.65016 25.24 12.62 25.24C19.5899 25.24 25.24 19.5899 25.24 12.62C25.24 5.65016 19.5899 0 12.62 0C5.65016 0 0 5.65016 0 12.62Z"
                            fill="#0088CC"
                          />
                          <path
                            d="M6.38882 12.3899C9.77648 10.914 12.0355 9.94093 13.1657 9.47084C16.3929 8.12854 17.0634 7.89539 17.5006 7.88758C17.5966 7.88596 17.8116 7.90982 17.9508 8.02277C18.0684 8.11813 18.1007 8.24701 18.1162 8.33748C18.1317 8.42787 18.151 8.63397 18.1357 8.79496C17.9608 10.6324 17.2041 15.0915 16.8191 17.1496C16.6562 18.0204 16.3354 18.3124 16.0249 18.341C15.3501 18.403 14.8377 17.895 14.184 17.4665C13.1612 16.7961 12.5835 16.3787 11.5907 15.7245C10.4434 14.9684 11.1872 14.5529 11.841 13.8738C12.0121 13.6961 14.9855 10.9916 15.043 10.7462C15.0502 10.7156 15.0568 10.6012 14.9889 10.5408C14.9209 10.4804 14.8207 10.5011 14.7483 10.5175C14.6457 10.5408 13.0119 11.6207 9.84668 13.7573C9.38289 14.0758 8.96281 14.2309 8.58649 14.2228C8.17153 14.2138 7.37341 13.9882 6.78008 13.7953C6.05234 13.5588 5.47394 13.4337 5.52431 13.032C5.55055 12.8227 5.83871 12.6086 6.38882 12.3899Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <button
                        aria-label="ایکون"
                        className="text-gray-100 hover:text-blue-600"
                        type="button"
                      >
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.10769 19.0303C8.10769 19.1281 7.99529 19.2063 7.85356 19.2063C7.69229 19.2209 7.57989 19.1427 7.57989 19.0303C7.57989 18.9326 7.69229 18.8544 7.83402 18.8544C7.98063 18.8397 8.10769 18.9179 8.10769 19.0303ZM6.58781 18.8104C6.5536 18.9082 6.65134 19.0206 6.79795 19.0499C6.92502 19.0988 7.07163 19.0499 7.10095 18.9521C7.13027 18.8544 7.03742 18.742 6.89081 18.698C6.76374 18.6638 6.62202 18.7127 6.58781 18.8104ZM8.7479 18.7273C8.60618 18.7615 8.50843 18.8544 8.5231 18.9668C8.53776 19.0645 8.66482 19.1281 8.81144 19.0939C8.95316 19.0597 9.0509 18.9668 9.03624 18.8691C9.02158 18.7762 8.88963 18.7127 8.7479 18.7273ZM11.9636 0C5.18521 0 0 5.14611 0 11.9245C0 17.3443 3.41119 21.9821 8.28363 23.6144C8.90918 23.7268 9.1291 23.3407 9.1291 23.0231C9.1291 22.7201 9.11444 21.0487 9.11444 20.0224C9.11444 20.0224 5.69347 20.7555 4.97506 18.5661C4.97506 18.5661 4.41794 17.1439 3.61645 16.7774C3.61645 16.7774 2.49731 16.0101 3.69464 16.0248C3.69464 16.0248 4.91153 16.1225 5.58106 17.2856C6.65134 19.1721 8.4449 18.6296 9.14376 18.307C9.25616 17.5251 9.57382 16.9826 9.92569 16.6601C7.19381 16.3571 4.43748 15.9612 4.43748 11.2599C4.43748 9.91591 4.8089 9.24149 5.59084 8.38136C5.46377 8.0637 5.04837 6.75396 5.7179 5.06303C6.73931 4.74537 9.09 6.38254 9.09 6.38254C10.0674 6.10886 11.1181 5.96714 12.1591 5.96714C13.2 5.96714 14.2508 6.10886 15.2282 6.38254C15.2282 6.38254 17.5789 4.74048 18.6003 5.06303C19.2698 6.75885 18.8544 8.0637 18.7274 8.38136C19.5093 9.24638 19.9882 9.9208 19.9882 11.2599C19.9882 15.9759 17.1097 16.3522 14.3778 16.6601C14.8275 17.0462 15.2086 17.7792 15.2086 18.9277C15.2086 20.5747 15.194 22.6126 15.194 23.0133C15.194 23.331 15.4188 23.7171 16.0395 23.6047C20.9265 21.9821 24.24 17.3443 24.24 11.9245C24.24 5.14611 18.742 0 11.9636 0ZM4.75026 16.8556C4.68673 16.9044 4.70139 17.0169 4.78447 17.1097C4.86266 17.1879 4.97506 17.2221 5.0386 17.1586C5.10213 17.1097 5.08747 16.9973 5.00439 16.9044C4.92619 16.8263 4.81379 16.792 4.75026 16.8556ZM4.22245 16.4597C4.18824 16.5233 4.23711 16.6014 4.33485 16.6503C4.41305 16.6992 4.51079 16.6845 4.545 16.6161C4.57921 16.5526 4.53034 16.4744 4.4326 16.4255C4.33485 16.3962 4.25666 16.4109 4.22245 16.4597ZM5.80587 18.1995C5.72768 18.2631 5.757 18.4097 5.8694 18.5025C5.98181 18.6149 6.12353 18.6296 6.18706 18.5514C6.2506 18.4879 6.22127 18.3413 6.12353 18.2484C6.01602 18.136 5.8694 18.1213 5.80587 18.1995ZM5.24874 17.4811C5.17055 17.53 5.17055 17.6571 5.24874 17.7695C5.32694 17.8819 5.45889 17.9307 5.52242 17.8819C5.60061 17.8183 5.60061 17.6913 5.52242 17.5789C5.454 17.4665 5.32694 17.4176 5.24874 17.4811Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-200">
                  درباره ما
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  <li>
                    <a href="#">معرفی شرکت</a>
                  </li>
                  <li>
                    <a href="#">ماموریت ما</a>
                  </li>
                  <li>
                    <a href="#">تیم آموزشی</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-200">
                  پشتیبانی
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  <li>
                    <a href="#">سوالات متداول</a>
                  </li>
                  <li>
                    <a href="#">تماس با ما</a>
                  </li>
                  <li>
                    <a href="#">قوانین و مقررات</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-200">
                  پشتیبانی
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  <li>
                    <a href="#">سوالات متداول</a>
                  </li>
                  <li>
                    <a href="#">تماس با ما</a>
                  </li>
                  <li>
                    <a href="#">قوانین و مقررات</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
