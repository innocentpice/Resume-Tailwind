function App() {
  return (
    <div className="container mx-auto mt-5 antialiased leading-relaxed">
      <div className="flex flex-row">
        <div className="flex flex-col w-full">
          <p className="flex tracking-wide font-bold text-2xl">
            C H A N A C H A I
          </p>
          <p className="flex tracking-wide font-bold text-2xl">S A P P A S O</p>
          <p className="flex mt-3 font-semibold">
            <span className="mr-2">Senior Software Engineer</span>
            <img
              className="inline w-3 h-5 pt-1"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAQlBMVEVHcEzwThbwThXvThbwThfwThXwThbwThbwThXwThX5twD/5GP/98/yaBD9zjH5rAL3mwX7wxn1hgn/3FH/7pr/6HUP4I0YAAAACnRSTlMArZX/F8owVel2gu3HeQAAAuFJREFUWMPVmNl26yAMRYMBA3Yxg9v//9WbmElMNk28utbVUx+aHenoSJbzePyvwW7izBjdlBDGdL4DRDHGfL4loXtIHDsS+ZAzYR/0M47AMcRNHIznmzgf2AnhPN5MidCCg6f3JoOXHMzf92ERA+PLBbnmjDiA5wq0OSOmzCezw8F4cKICifAeaB4cTT+ZmX+s/Y3aBDolL0wvSo47iYHci8L0sixyWG0B5ikfMKwWQOLjUzU/8smQL06qjoxJ9EppzhOyB2jRWdvI/AxysS6mPCHlQKG4p7cZCtuXTozUdmyH9pxF+a9heStI8Qi85IDOnUyxr0bKE05U6Wz2QrbQelAfWNvZxDDQId3jNGt7dKSWsIKS0wDRrole/2+hEWHYK5DIQf6bVQXSVzucFuOggaGfsZ2oTTom0kmMyDHrbvyfFzYSRUJHSiChdV1Nrra0Wtn6YYDyheFISaF9jSQnktRJr6nlRmhjBSo7IolkYXKo1fy634mzbv7j3lyq0X+Wtf75UdPghJRU4YQWKBa27xsU2odZWnNH66ZJ2CZHMnvirFtech+ks3JM7FeIvTl3qAYtmXHWkuNFKkFTBbKFvjvQGYpkts2AARaV2Do34JNUJHSItO1BLFsvtrno2dqLAxNKtPXQkmw6tvUqIIjWC1uVBuyGAWKL+mmtrgorDCUbu18kjQYSciDV2rRzav8wyDavLhonZBsFyeaJw6JIIyATh58170c5WlpMCHWOGl117ef764jvsjLdfaOkoThYm8e84idbAqp/385xI+0tDiCZcAWKk6M2J0FOrO6K42WSoLqfDPTl6jKhYeLqPtapdXVpW3AiP73/3W1olV87R9d8vDD7a6Hpoyx6dSKjtCuNZ61O5YPiMXzgnc0frFa759vmwj3otHUDP439ICF4vBLAQyxAcPmaeZpVvCmki3RVoV/+IEXYVN3vnIr33vkJY2JCCFGEJsHYpz/U/H38A/wGVtMS8SSnAAAAAElFTkSuQmCC"
            />
          </p>
        </div>
        <div className="flex flex-col">
          <img
            className="flex aspect-square h-24 m-auto mr-10 rounded"
            src="src/assets/linken_profile_pic.jpeg"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 border-t-2 border-blue-200 mt-5">
        <div className="col-span-2 pt-5 pr-5 gap-10">
          <div className="min-h-[5rem] border-b-2 border-blue-200 py-5">
            <h1 className="text-lg underline underline-offset-4 font-bold pb-4">
              About me
            </h1>
            <span className="leading-loose">
              Experienced Full Stack Developer with a strong background in
              developing and presenting technical solutions to senior executives
              and key stakeholders. Proficient in TypeScript, React.js, Java,
              and Golang, with additional expertise in J2EE, Spring Framework,
              JavaScript, and Node.js. Adept at applying Domain-Driven Design
              (DDD) principles to create scalable, maintainable software
              architectures. Skilled in DevOps practices using Kubernetes,
              Jenkins, and GitLab CI, with extensive experience in deploying
              applications on AWS, Google Cloud Platform, and Firebase.
            </span>
          </div>
          <div className="min-h-[5rem] border-b-2 border-blue-200 py-5">
            <h1 className="flex font-semibold underline underline-offset-4 uppercase">
              PERSONAL INFORMATION
            </h1>
            <div className="flex flex-col gap-3 pt-5">
              <div className="flex flex-row">
                <div className="flex flex-col w-full">
                  <h2 className="flex font-medium text-sm">BIRTH DATE</h2>
                  <p className="flex text-sm mt-1">19 September 1995</p>
                </div>
                <div className="flex flex-col w-full">
                  <h2 className="flex font-medium text-sm">ADDRESS</h2>
                  <p className="flex text-sm mt-1">Chonburi Thailand</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col w-full">
                  <h2 className="flex font-medium text-sm">EMAIL</h2>
                  <p className="flex text-sm mt-1">
                    chanachai.devper@gmail.com
                  </p>
                </div>
                <div className="flex flex-col w-full">
                  <h2 className="flex font-medium text-sm">PHONE</h2>
                  <p className="flex text-sm mt-1">089-245-6916</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h2 className="flex font-medium text-sm">NATIONALITY</h2>
                  <p className="flex text-sm mt-1">Thai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[5rem] border-b-2 border-blue-200 py-5">
            <h1 className="text-lg underline underline-offset-4 font-bold pb-4">
              EDUCATION
            </h1>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="flex pt-1 pr-2">
                  <img
                    className="inline w-8 h-8"
                    src="https://www.kmutnb.ac.th/KMUTNB/media/kmutnb/images/kmutnb_index_Logo.png"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-md font-medium">
                    King Mongkut's University of Technology North Bangkok
                  </p>
                  <sub className="font-semibold">2014 - 2017</sub>
                  <p className="mt-4">
                    Bachelor's degree Business/Commerce ( GPA 3.28 )
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col min-h-[5rem] py-5 gap-5">
            <h1 className="text-lg underline underline-offset-4 font-bold">
              EMPLOYMENT HISTORY
            </h1>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="flex">
                  <img
                    src="https://cdn.onefence.co/images/2022-06-16/beae9f68-f503-4af9-816a-25669521ffb8.jpeg"
                    className="inline w-10 h-10"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-md font-medium">
                    Senior Software Engineer at Customix&nbsp;
                    <span className="border-[1px] px-1 rounded-lg text-sm font-normal border-black">
                      Full-Time
                    </span>
                  </p>
                  <sub className="font-semibold">Jun, 2021 - Present</sub>
                </div>
              </div>
              <p className="pt-5 pl-4">
                <ul className="list-disc list-inside">
                  <li>
                    Ecommerce Platform
                    <ul className="pl-6">
                      <li>
                        - Stack: PIMCORE , NodeJS(Express) , NextJS(React) with
                        AWS
                      </li>
                    </ul>
                  </li>
                  <li>
                    Ekyc Platform
                    <ul className="pl-6">
                      <li>
                        - Stack: Appman, Node.js (Express), NextJS(React) with
                        AWS
                      </li>
                    </ul>
                  </li>
                  <li>
                    Ads Platforms
                    <ul className="pl-6">
                      <li>
                        - Features: Ads Management, Provider , Report , Cost
                        Analysis
                      </li>
                      <li>
                        - Stack: Golang , Lambda , MongoAtlas , React , EKS
                      </li>
                      <li>
                        - Detail: All Solution initiative & Implementation
                      </li>
                      <li>- Role: SA , Frontend Developer , Devops</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="flex px-1">
                  <img
                    src="https://computerlogy.com/wp-content/uploads/2018/07/computerlogy-logo-only-1-300x242.png"
                    className="inline w-8 h-8"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-md font-medium">
                    Software Engineer at Computerlogy&nbsp;
                    <span className="border-[1px] px-1 rounded-lg text-sm font-normal border-black">
                      Full-Time
                    </span>
                  </p>
                  <sub className="font-semibold">Feb, 2020 - Jun, 2021</sub>
                </div>
              </div>
              <p className="pt-5 pl-4">
                <ul className="list-disc list-inside">
                  <li>
                    Social Listening Platform
                    <ul className="pl-6">
                      <li>- Stack: Golang with GKE</li>
                    </ul>
                  </li>
                  <li>
                    News & Contents Crawler Service
                    <ul className="pl-6">
                      <li>- Stack: Golang with GKE</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="flex px-1">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUTExIVFRUVFRUWGBYSFxUXGhUVGBUWFxUYFRYYHiggGBolHRUVITElJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAN0A5AMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EAEMQAAECAgQKBggFAwQDAAAAAAEAAgMRBAUGIRIiMUFRYXGBkbETMnKhwdEzQlJigpKywiM0c9LhFlPwFKLi8SRDY//EABoBAQACAwEAAAAAAAAAAAAAAAAFBgIDBAH/xAA2EQABAwEFBQcDBAIDAQAAAAAAAQIDBAUREiExE0FRcYEiMjNCYZGxodHwFSM0UsHhFCTxYv/aAAwDAQACEQMRAD8A7igCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIDya8vQAlei8xxKQxvWcB2iBzWDpGN1VDJGquiGs+t6MMsaH87fNalq4E86e5sSnl/qvseCuqL/AHofzBeJWQL5kH/Gl/qplh1jAd1YsM7HtPis21MTtHJ7mKxPTVq+xsBwW1FRdDWuR7Neg9QBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQHhK8BHVhXcCDc94wvZbe7gMm9cs9bDB31z4bzfFTSy91CuU22Lz6JgaNL7zwFw71ETWy9co0u5klHZaJnIvsRppVNj5DFcPcBDf9sguPa1s+mJeWSHSkdLDrcZYVmKW+8tDe24T7prNtmVL81S7mpgtfA3JPg2mWOj54kMbMI+AW5LFlXVyGv8AVGbmqemxsX+6zg5erYkm5yfU8S1WL5VMMWyNJGQw3fERzC1useoTRUM0tOJdUU1jVdNg3hkRuuGZ9zCtS0tZD3UXoptSopZdbuqGSj2lpUMyc7ClmiC/iJHismWnUxLc7Pmhi6z4JM25cieoFroLrojTDOnrN4i8cFJwWxE7J6XL9Dgls6RndzJ+DSGvAc1wcDkLSCO5SrHtel7VvI9zVatzkuMqzPAgCAIAgCAIAgCAIAgCAIAgCAFAaVY1nCgNwnuloAvJ2Bc89THAl71+5thhfMtzUKbWdpI8Y4MObGm4BnWdtI5BV2otOadcMeSempNQ0EUSYn5/Bkq6ykZ98Q9GNGVx3Zt6yp7Ikk7Ui3fJhLaLGZRpf9ELLQbPUaFkZhH2n4x8gpuKz4I80bevFSMkq5ZNV9iUwAF2IiJocq55qJpoeny6K0ZSBvC8xtTeeo1VPkR2e03iF5tG8UPVa7gfYdNZXoY3XHoQGGk0KFEEnsa4e8AeGha5II5Eue1FM2yObm1biv1hZGGb4Tiw6HYzfMd6i6ix43J+2t3wSENpvbk9L0+pX4kClUN08ZnvNva7w43qJVtTRO3p8Kd6Op6lLv8A0sVUWrY+TYwDHZMIdU/t5KXpLVZJ2ZMl+hHVFnuZmzNCyB01Lot+ZHb7j6XoCAIAgCAIAgCAIAgCAIDwoCBr+0LYM2Mk6J3M7WvUouttFsHZbm74O6lonS5uyQrFAq+PS3lxJlPGiOyDUBn2DuULDTT1j8S+5KSzxUrcKa8PuXSqqmgwBitm7O93WPluVkpqSKBOymfEhJ6mSZe0uXA33kATNwC6FW7NTRqQdYWpgQ7mkxHe5k+bymo2e1IY8kzX0+52w0Esma5IQFLtXSX9XBhjUJnifJRUtrzuXs3ISMdmxN72ZFR6fGf1orztcZcMi4X1Er83OX3OttPE3utNYhaVz1NyJdoeYIXlx6ZIcRzeq4jYSOSzbI5uir7mDmNdqhv0avqUzJFcRofjc711x2jUR+Y530ULt3sTdCtkckWH8UM/afNSMNtbpG+32OGSy11Y73LFQayhRhOG8O0jIRtBvCl4amOXNikZJC+Ne0htPhtcCHAEHKDeCtzmtclyoYIqpmhVK6srlfA3wybvhObYVB1lkovah9vsSlNaN3Zk9yMqavYtHOA8EsBkWnrM7M+S46SvkplwPTLhwOqoo2Ttxx6/JeqJSWRGh7HYTTkI/wAuKssUrZW4mLehBPY5i3OQzraYhAEAQBAEAQBAEAQBAVu01fdFOHDP4hyn2B+5RFo2gkSbNne+P9khRUayridoQtn6idHPSRJiHOc88Q55HRrUbQ0Dp12kmnydtVWJEmBmvwXmBCawBrQABcALgFZ2NRqXImRBq5XLe4jq6ryFR7jjPzMGXfoC4quuigS5c14HRT0j5ly04lJrOt40c47pNzMbc0ee9VyorZZ17S5fnuTkFJHFomZHrjOoIAvQJrw9uPMIIeHqAIAgPqG8tILSQRkIMjxWTHq1b2mLmI5LlQs9T2rIk2PePbAvHaAy7Qpulta7sze/3Iqps3fF7FvhRWuaHNIIImCDMFTzXtciKikQ5qtW5SJr2omUgYQxYgFztOp2kclw1lC2dL0ydxOqmqnQrxTgVOrqfGocUtcDKeOw59Y1686gqeolopMLtN6f5JeaGOqjxN13L/gv9DpLIjA9hm1wmD561ao5Gvajm6KV97FY5Wu1QzrYYhAEAQBAEAQBAEBD2jrcUeHd6R1zRo0uOoLgr6tKeP1XQ6qSmWZ/oVaz1UupMQvfPABm4nK92WXmoOgpFqZFe/Tf6ktWVKQMwN1+C/Q2BoAAkBcAMwVpa1ES5CAVVVb1K9aW0HRThw/SZycjAcm0qKtGv2P7be98HfRUe17TtPkpL3kkkkkkzJN5J1qtOVyuVXak81rWpc3Q+V4egrwKWir7IOcA6K/BBvky87ybh3qbgsZypfI7ohEzWmiZMTqTlGs3RWf+vCOl5J7sncpOOzKdnlv5nA+tnd5jfhUGE25sNg2NAXW2GNujUNCyPXVVMhgN9lvALLZMXcnsY4ncTVjVRR39aCzc0DvC0vpIX95qGxtRK3RykVS7IQXdRzmH5hwN/euGWx4VzYuE7I7SlTvZlcrKz9IgzJbhtHrMv4jKFEVFmzQ53Xp6ElBXRyZaKRSjzsC9BJ1LXMSjuuvYTjM8W6Cu2jrn063eXehyVVIyZL9F4nQKFS2RWB7DMHu0gjMVa4pWysR7SvPjdG5WuI+0NStjsmJCI3qnT7p1clyVtGk7L01OilqnQu9Cr2erV1GiFj5hhMnA+o7Jhd0j/ChKCrWmkwP005EpWUzZ2Y26/Jf2uCtSEB6H0vQEAQBAEAQBAYqRGaxpc4yDQSTqCwe9GNVy6IetarlREOeRHxKbSO0ZD3GDyHeqm5z62oy/ELE1G0kOf4p0ChURsJjWNuDR/wBk61aoomxMRjdEK9I9XuV7tTFGrOC2I2E5wD3CYHKZzE5tixfUxskSNy5qZthkcxXomSGpXtTMpDdEQDFd4O1LnraJlQ3g7cpspap0K8W7ygUmA+G4seJOGUH/ADIqpJE6JysdqhY45GyNRzdD2LRnta1zgQHzwZ5wJTOy9evhexqOcmp42VrlVEXQwuWozXQ6vRuq3sjkr2zuoVJ2qmVZngQBAEAQHkl4CBrqzcOLNzJMiaRkcfeHiO9RlXZrJUVzclO6mr3wrcuaFIpdFfCcWPaWuGnPrGkKtSxOidhcmZOxStkbe0wrUbCTqKtnUd87yw9ZviNYXbRVbqd3oupy1dMkzfVNDosGK17Q5pmCAQRnBVuY5HtRzdCtuarXKilWtlVF3TsF4ueBnGZ27P8AwoW1qTLbNTPeSlnVOFdm7oZbG1pht6FxxmCbdbNG7ks7Kq8bdk5c00MLRp8DsaaLqWhTRGhAEAQBAEB4V4oKpbasZBsFufGdsnijeRPcFB2xUXNSJOv2JWzIL3bRehsWOq3Ah9KRjRMmpmbjl4LfZVNs48a6r8Gq0Z8cmFNE+SZrOnNgw3RHZhcNJzALvqJ2wxq9xxwxOlejEOZ0qO6I8vcZucZnwlsVMlldK5Xu1UtEcbWNwt0LPZy0eSFGOprzycfFTdn2lpFL7kTW0F18kaFiptVQYxa6I2ZabtY0HSNSlpaWKVyOel6oR0c8kaKjVyUrdvBjQdj+bVD23qzqSdl+boVVygiWdodWo/Ub2RyV7Z3U6FSdqpVq8tHHhR3w2hmC3BlNpJvaCc+tQdbaU0Mysbdcnp/slqWhjliR633mj/V1K0Q/lP7lyfrE/p7L9zo/TIvX86D+rqVoh/Kf3J+sT+nsv3H6ZF6/nQf1dStEP5T+5P1if09l+4/TIvX86D+rqVoh/Kf3J+sT+nsv3PP0yL1BtdStEP5XfuXqWvPfu9l+4/TYvX86F6gmbQdIB7lZmLeiKQS6mjXVVMpDMF1zh1XZ2nxGpc9XSsqG4V13G6nqHQuvTTec7plFfCeWPEiO/WNSqM0Lonqx24skUrZW4mmBajYWixtalrugcbnTLNRylu/Lt2qcsmrwrsXLroRNpU2W1TqXCI0OBBEwRIg5wVYFbiS5SGRVRb0Od0uE+h0m71DhN95hzcJhVKVjqOpvTct6cixsclVBcv4p0OjR2va1zTMOAI2FWxj0e1HN3ldc1WrhXVDKszwIAgCAID5iOAEysXKiJeu4HOQDS6Vqe/gwf8QqlnWVfoq/QsS/9amv9DozGgAACQAkNitzUREuQrqreUi2dYYcQQgcWHedbz5DmVW7XqcUiRJonyTlmw4W7RdVK4oYkySqGrP9RFDT1G3vOrMN/mu2hpVqJcO5M1OSsqNjHemq6HSIbQBIZBk2K4IlyXIVvUqFvetC2P5tUBbfk6kxZfm6FUcoElnaHVqP1G9kcgr2zup0Km7VSi2mokV1JiFsN5Bwbw0kHEbnCrFowyOqHK1qqn+icoZWJC1FchGf6CP/AGonyO8lw/8AHm/qvsp17aP+ye6GCJDc0ycCCMxBBG4rW5qtW5dTa1UVL0PlYnpsNoUYiYhRCDnDHeS2pBKqX4V9lNazRJ5k9z01fH/sxPkd5LJKeW/ur7GK1EX9k9zp9H6o2DkrpH3U5FXdqZFmeEDamqRGh4bR+IwEiXrDO3y/lRlp0m2jxJqh20NTsn4V0UoKqmeilj3H0x5BBBkQZg6CMiya5WqioYuajkuU6bVFNEaE2JpF40OFxHFXSlmSaJJE3lWniWN6tUh7bUHChiKBewyPZddzl3qOtiDFGkieX4OyzZsMmDifNiabhQ3QzlYZjsu/mfEJY82KNY13fAtKHDJjTeWdTJHBAEAQBARNqaT0dGfLK7EHxXHumuG0ZdnAq8cjqo48cyIQVhaLNz4hzAMG03u5Dioyxos3P6HdakmSM6lspccQ2OecjWk8BNTksiMYrl3ESxqucjU3nLY0UucXHK4knaTMqlSPV7lcuqlrY1GtRqbj4WsyOiWXq/oYImMZ+M7fkG4eKt9nU+xhS/Vc1K1WTbWVV3Ewu85SnW960HY/m1V+2/J1Jiy/N0Ko5QJLO0Or0bqt7I5K9s7qFTdqplWZiEBzm1X5qJ8P0NVRtP8AkqWOg8BPzeRK4DsOpVZ6KF+mz6QrvT+E3knwVOXxHczaW4wCAIAUBzm09A6GOZDFfjN1T6w3HmFUrSp9lOt2i6FioJtpHnqmSkSo47kLVYal3vhHPjjuDvtU9Y01yujXmQ1qRaPTkWumQA9jmHI5pHEKbljR7FbxS4imOwuRycSiWYjGFSg03Twobtv/AG0Ks2c/ZVOFeRPVrdpBi6nQlayvhAEAQBAVK3ke6EzSXOO4AD6ioK239hrev+CWspl7nO6ElZCBg0ZpzuLnd8h3ALssuPBTp63qcte/FMvoY7ZUjBo5b7bmt3dY8lha0mCnW7eZWezFMnoUJVUsJuVPReljw2Zi6/YLz3BdVHFtZmt9TnqpNnErjp4VzQrB6vQU63vWg7H82qv235OpMWX5uhVHKBJZ2h1ejdVvZHJXuPuoVN2qmVZmIXgOdWq/NRPh+hqqNp/yV/NxY7P8BCIXAdh1Kq/Qw/02fSFeKfwm8k+CqTeI7mptLcawgCAICuW1omFBD5Xw3D5XYp78FRNrxYocW9PgkLNkwy4eJRlWCfJCoKRgUiEdLg07HYviuugl2dQ1enuc1ZHjhcdLCuRWTndft6KlvIzPbEHc7nNVKtbsqxXJxRSxUrtpTXLwVDoTHTAOm9Wtq3oileXJT7WR4EAQHhQFFtvEnHaNEMd7neSrFsuvmROCE5ZaftKvFS31PDwYEIaGN+kKwUrcMLU9EIiZcUjl9SuW9ieib23fSBzKh7bd3E5kjZTc3OKkoAmSxWHgzjud7LDxJA8CpixmIszncEIy1HXRo31LyArMQZ6gKdb3rQtj/tVftvydSXsvzdCqFQJMLodXo3Vb2RyV7Z3UKk7VTKszELwHOrVfmonw/Q1VK0/5K/m4sdn+AhEKPOw6lVfoYf6bPpCvFP4TeSfBVJvEdzU2luNYQBAEBp1vBw4EVuljuMru9aKlmOFzfQ2wuwyNX1OXhUhC1HoeReMov4XrJq4VvPHJelx1mG6YB0iavTVvRFKiqXLcUe3EOUdp9qGO5x81W7abdM1eKfBOWWt8Sp6ltqeJhQIR0w2fSFPUrsULXeiERO3DK5PVTdXQaggCA8KA5/bT8y7sN5FVS1/5C8kLBZvgdVL5RhiN7I5BWiPuIQL+8pTrdn8WH2D9Sr1t+I3l/kmLKTsu5lZUKSpa7BDGinUz7lPWImb+hEWqvd6lxVgIcICn29ywtj/tVftvydSXsvzdCplQJMLodXo3Vb2RyV7Z3UKk7VTKszELwHOrVfmonw/Q1VK0/wCSv5uLHZ/gIRCjzsOpVX6GH+mz6QrxT+E3knwVSbxHc1NpbjWEAQBAfEUTaRqKxf3VPU1Q5MFRHaluTQFeKDqtAM4bOw3kFeoe4nIqcnfXmVK3gx4XZdzCgLb77OSktZWjuhYbOH/xoPYCl7P/AIzORHVfju5qSa7DnCAIDwoCg21b/wCRtht+4Kq2wl1Rf6E/Zi3w9S8UF84bDpY08QFZoVvYnIgnpc5SpW8b+JCOlrhwI81A22nbavopL2UvZcnIq6gyWLTYN+PFbpa08CfMKcsR3bc30QibVbk1eZc1YiGCAp9vcsLY/wC1V+2/J1Jey/N0KmVAkwuh1ejdVvZHJXtndQqTtVMqzMQvAc6tX+aifB9AVStP+S4sVB4CEQVHnadRqv0ML9Nn0hXin8JvJPgqk3iO5r8m2txrCAIAgMVLfgsc7Q0ngFhItzFUyYl7kQ5QFRLy2pwBQHV6K2TGjQ0DgFe40uYnIqT1vcpTrdu/EhjQwni7+FX7aW97U9CYspOy5fUstn2yo8H9Np4ifipihS6nZyQjKrOZ3NSRXWaAgCA8KApduoX4kN2lpHAz+5Vy22dprvRSasp17XN9Sx2cjYVGhH3Q35cXwUxQvxQN5XexGVTcMzuZE27gzhw3+y4jc4f8VwWyy+JruC/J2WW66RW8UKWq2ThM2SpGBSW6HhzeImO9vepKy5MFQiLouRw2izFFfwOhAq2FdQ9Q9Kfb3LC2P+1V+3PJ1Jey/N0KmVAkwuh1ejdVvZHJXtndQqTtVMqzMQvAc6tX+aifB9AVStP+S4sVB4CEQo87TqVV+hhfps+kK8U/hN5J8FUn8R3Nfk2luNYQBAEBE2mpGBRomlwwR8RlymuG0JdnTuXodNIzHMiHOVTyzqpnoUHDiMZ7T2jiRNboGY5Wt4qhqmdhjV3A6o1XdCqFAtlFwqSR7LWt33u+5Va1nY6i5N1xP2cmGC/iXmhQ8GGxvstaOAAVlhbhjRPQgnre5VM62mIQBAEBXLb0fCgtfnY8cHXHvwVE2zHigxcFJGzX4ZbuKHxYekzhOZnY6e5147w5Y2PJfCrd6L8i02XSI7iSVoaN0lHiNGUDCG1t/guyui2kDm9TlpZMErVObqnFovPuDFLHNcMrSHDaDMLKN6scj01TMxe1HtVq7zqVCpDYjGvbkcAeKu8UiSMR6b0Ko9iscrV3GdbDEp9vcsLY/wC1V+2/J1JeyvN0KmVAkwp1ai9RvZHJXuNeyhUn95eZmWZiF4DnVq/zUT4PoCqVp/yXFioPAQiFHnadSqr0ML9Nn0hXin8JvJPgqs/iO5r8m0txqCAIAgKbbimTLIQzY7tuRvjxCr9szZtiTmv+CXsuLWToVVQRME5Y+i4dIDs0MF283DmeCk7JixT4uGZH2lJhiu4l/mrTuIA5yw/6imTyh8WfwAz+lqqSf9isv/8Ar4/8LGv7NL0+ToytpXD1egIAgCA1azooiwnwz6zSNhzHjJaaiPaRuZxQ2RPwPRxSbJUroqRguuDwWEe9m7xLeq3ZcuyqMK78upNWgzaQ403F/krTdlcQJzKu6F0MZ7M05t7JvHDJuVNrYdlMrd2qcizUku1iRd5orkOkt1iqzF8Bx0uZ9zfHirBY9VksLl5ENacFy7VOpbgp4iSn29ywtj/tVftvydSXsrzdCpuUEmpMKdWovUb2RyCvMXcTkVJ/eXmZlsMQvAc6tX+aifB9AVStP+S4sVn+AhEKPO06lVXoYX6bPpCvFP4TeSfBVZ/EdzX5NpbjUEAQGCmUpsJjnuyNE/4Gta5ZWxMV7tEM42K9yNTecxptJdFe6I7K4z2aBuFypU0qyyK9d5aIY0jYjU3GBajYXuxtBwIOGcsQz+EdXxO9WmyYNnDiXeV60JccuHgbtoqZ0UB7s5GC3a67uvO5dFfNsoHO9LupppI9pKjSuWIok4johFzGyHad/APFRFjQ3vV67vkkrUkuajELurIQoQBAEAQHhQHP7U0MwaRhtuD8dp0OBxu+R3qq2lCsM+NN+fUn6CRJYlYu4ulU04RoTXjOLxocMo4qxU06TRI9CFnjWN6tUibYVZ0kPpGjGh5dbM/DLxXDatLtI8bdU+Drs+fA/CuilGVYJ82KAyIYjRCnhzBbLTp2LdA16yJs9dxqmcxGLj0OoQMLBGFLCkJyyTlfLUroy/CmLUqy3XrdoVO3uWFsf9qgrb8nUlrK83QqblBJqTCnVqL1G9kcgrzF3E5FSf3l5mZbDELwHOrWfmonw/Q1VK0/5Klis/wEIgrgO06jVXoYX6bPpCu9P4TeSfBVZvEdzX5NtbjUEB4SvFW7UFDtTXPTO6Nh/Daco9d2nYMyq9p1m1ds26ITtn0uzTG7VSAUUSZvVNV5jxWszZXHQ0ZfLeuqjp3Tyoz3OWqnSKPFvOlsaGgACQAkNQGRXJqIiXIVpVvzUpNtKfhxBDGSHee0R4DmVXLXnxyJGmia8ybs2HC1ZF3lks5QehgNaRJxxnbTm3CQ3KYoYNjCjV11Iyrl2sqruJVdpzBAEAQBAEBE2jq3p4RAGM3GbtGbeLlw19Nt4lRNU0Omln2UiLu3lZsjWfRROidc2Ic+Z+QccnBQ1l1Wyfsn6L9FJOvp0ezaN1T4L24KzXEHoUSuLOxGxgITZsiGbdDDnDjmAVYq7Nekv7aZO+hO01e3Z/uLmn1LRUlTso7bsZ56ztOoaApqjo2U7eK8SLqap0zr103IRVf2mMN2BBkS04zjeLvVHif8HHW2ps3YYuv2OmkoNomJ/QiLSVqykNhObcRh4TTmOLxCj7RqmVDWKmvA7KKnfC5yL7kG5RiEip1ai9RvZHIK8xdxORUn95eZmWwxCAiqbUNHivL3sJcZTOE4ZBIXA6lxS0EEr8b0z5nRHVSxtwtXIwf0vRPYPzv81r/Sqbh9VM/+fP8A2+hMQIQa0NGRoAGwCQXe1qNRGpuOVXK5VVTIsjw+YjwBM3AXknMFi5URL1PURV0KXaO0XSThwjiZHO9rUNXNV60LSx/txab1Jmjobu28rKhCVPWtJIAEyTIAZyskarluTU8VURL10Oh2cqkQId/Xde46NDRqHmrbQUiU8d29dSt1dRtn+iGxXdYiBCLzlyNGlxyee5baypSCNXb9xrp4VlkRu7eU6zVAMePhvva04bifWcTMDjfuVfs6nWomxu0TNeZM1syQxYG67uR0ABWogD1AEAQBAEAQHhCApFrqpwHdMwYrjjS9V+nYee1Vu1aRWO2rNF15k3Z9Sjm7J2v+CZsvXPTMwHn8Rgvn6zfa26VIWdW7ZmF3eT6+pw11LsXYk7qk8pRTiK1a6tYkICGwFuGL36tDTpURalW+JuFmV+8kKCnbIuJy6bikqs65k/yC8AK9C6HUqupDHsaWODhIC4gyuz6FdqeRjmJhXcVSVjmuXEhtTW81hAEB4gBKAiKytDAgzGFhu9ll/E5AuCotCGHJVvXgh1Q0Usud1ycSnVvXkakXE4LMzG5PiOdV6qr5Z8lybwJmno2Q5ol68SMXEdh6lyroeKqImZdLL1D0cosUY/qtPqDX73JWSzaDZfuSJ2vj/ZB11ZtFwM0+SxxojWtLiQABMk5gFLucjUVV3EciKq3Jqc9ranvpcYBgMp4MNvMnnqAVUqqh9ZMjWabvuWGnhbSxYndS71PVzYEMMGXK46XHKVZKWnbBGjU6kHPM6V+JTfXSaQgCAIAgCAIAgMVIgte0tcJtIkQc4WD2I9qtcetcrVRUOfVnQItDihzSZTmx/gdfMKrVMElHLjbpuUsMEzKqPC7XeXCoq4ZSG6HjrN8RpCnqOtbUNv0XehDVNM6F3pxN6mURkVhY9s2n/Jg5iumaJkrcDkyNMcjo3Ym6lFruz8SAS5s3w/aGVvaHjyVXrbOkhVXNzb+ak9TVzZcnZKQqjjvC9PD7hRXNM2uLTpaSD3LNkj2Le1VQxcxrkuVCWo1pqUz1g8e+Ae8SK7o7VqG6qi80ON9nQuzzTkb8O2cTPBadjiPArqS2372J7nO6ym7nfQ+nW0dmgj5z+1ZLbS7mfUxSyv8A6NeNa+kHqtY3cXcz4LQ+2Zl7qIhtbZcaaqpFUutY8XrxHEaBcOAuXFLWzy95y/B1x0sUfdb7mkubM6AgMtGo74jg1jS5xzD/AC4LZHE+R2FiXqYSSNjS9y3F2qCzjYMnxJOiZtDNmk61Y6Gzkhue/N3wQdXXOl7Lcm/JPPeACSZAXknMpRVREvOBEVSi2krwxz0cOfRg5srzmu0aNKrNoVyzLs49PknKOkSJNo/UnLMVH0LekePxHD5Bo26VJ2dQ7FuJ/eX6HDW1e1dhbohYQpU4AgCAIAgCAIAgCAIDWptDZFYWPE2nuOkaCtMsLJWKx+hnHI6N2JupQ6xq6NQ4gc0mU8V45O16s6q9RTy0b8TdNyk/DPHUswu14FnqK0bI0mPkyJozO7J06lNUVpMmRGvyd8kXVUTos25oThE1Jql5wepX61stCiTdD/DdoAxTuzblE1VlRyZsyX6EhT2hJHk7NPqVSn1PHg9dhl7Tb28Rk3qDnopoe8mXFMyXhq4pdFzNBctx0heAL0BeAL0BeA+4UJzjJrS46Ggk8As2RuetzUvMXPa1L3LcWCrbJxX3xT0Y0C9x8B3qWprIe/OTL5I2e0mtyZmW2r6thQRKG0DSc52nOp6CnjhS6NLiJlmfKt7lMlLpbITS57g1oznkNJWcszIm4nrchgxjnrhamZR67r19IPRsBDCZBoyv0TlyVZrK99Q7AzThxJ2mo2QJjfr8E3ZuzwhyiRROJmHsebuSkrPs7ZfuSd74OGsrdr2WaFkAUwRx6gCAIAgCAIAgCAIAgCAxx4LXtLXAEG4g5CsHsR6XOzQ9a5WrempS66su9k3wZub7OVzdntDv2qvVdluZe6HNOG9CaprQR/ZlyXjuMdUWniwsWIDEaNPWbvOXfxWNLaj4uzIl6fVDKos9kiYmZfCluq+tIMYTY8E5xkI2hTsFVFMl7FIeWCSJbnIbkl0Goj6XUVGiXuhieluKe7KuSagglzc06I6qWPuuImkWNhHqRHt2gO8lwvsaNe65U+p1stSRO8iKab7GRM0Zp2tI8SudbFfud9Dclqt3tPkWNi/3WcHLFLFk3uQ9W1Wf1UzwrF+1G3NZ4k+C2ssT+z/oa3Wrwb9SRo1lKM3KHP7R8GyXXHZMDe8l/M532hM7JFu5EvR6JDhiTGNaNDQByUhHEyNLmJccbnud3lMj3gCZIAGcrJVuzVTFEv0Qr9aWqhMmIX4jtI6o3593FRVVascaXR9pfoSFPZ0ki3uyQrTW0mmxM7teRrB4cyodEqK2S9f9ISirBSM/Ly31JUMOBjdaJncc2pozBT9HQMp0v1dxIapq3zLwTgTAC77jkPV6AgCAIAgCAIAgCAIAgCAIDySAi62qKDHvLcF3ttuO/TvXDU0EM+qXLxTU6YKuSHTNOClTp1m6RCOEzHAyOh3OHw5eE1BzWbPCuJufqmqErFXxSphflzPaHaakwsVxD5ZogvG/LxmkVp1EK3Pz9FyPZLPhkzZlyJqi2xgn0jHMOqTh59ykY7ZicnbRU+pxPsyVO7mSUGv6K7JGaO1Nv1SXY2vp3aPQ5XUkzdWqbbKbCOSIw7HN81vbNGujkNSxvTVFPs0lntt4hZbRvFDzA7gYItaUduWNDHxN81qdUwt1ehk2GR2jVNGPaiityOLj7jTzMguZ9q07ckW/kdLLPnduu5qQ9Mtk83Q4YGt5n/tHmuCW2naMbdz+x2R2V/dfYiiaXSz67xwYOTVwqtVVrvX6IdX/AFqbh/km6ssiBJ0Z0/cZk3uyndJSVNY6IuKVb/RNDhmtNzso0u9S0QIDGNDWtDQMgaJBTTGNY3C1LkIxzlct6rmZVmYhAEAQBAEAQBAEAQBAEAQBAEAQBAEBq0ygQovpGNdtF+45Vpkgjkye28zZK9i3tW4hqVZCju6pezUDhDg6/vUdJY8LlvbenI7WWlK3XMjo1jYnqxWntNI5TXI+xXeVyex0ttVPM32NV1kKT/8AM/Ef2rQ6x6j09zalpQ70U+RZKlaGfN/Cx/R6jgnv/oy/UofX2/2Zodj6RndDGwuPgtrbGmXvKifU1rakaaIpuwLGD14pPYaB3ma6WWK3zuVeRofajl7rSWolnKND/wDXhHS/G7jcu6KzqePRpySVkz9VuJVrQLpLuRETQ5Vz1PpegIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAID//Z"
                    className="inline w-8 h-8"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-md font-medium">
                    Software Engineer at ITALIAN-THAI DEVELOPMENT PCL.&nbsp;
                    <span className="border-[1px] px-1 rounded-lg text-sm font-normal border-black">
                      Full-Time
                    </span>
                  </p>
                  <sub className="font-semibold">May, 2018 - Feb, 2020</sub>
                </div>
              </div>
              <p className="pt-5 pl-4">
                <ul className="list-disc list-inside">
                  <li>
                    ERP Data Flow
                    <ul className="pl-6">
                      <li>
                        - Stack: SAP S/4HANA, ABAP, Java Spring, Hibernate,
                        Servlet, React.js
                      </li>
                    </ul>
                  </li>
                  <li>
                    Employee Training Management System
                    <ul className="pl-6">
                      <li>
                        - Stack: Java Spring, Hibernate, Servlet, React.js
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cost Analysis Report System
                    <ul className="pl-6">
                      <li>
                        - Stack: Java Spring , Hibernate, Servlet, Jquery,
                        DHTMLx
                      </li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="flex">
                  <div className="w-10 h-10"></div>
                </div>
                <div className="flex flex-col">
                  <p className="text-md font-medium">
                    Web Developer Freelance&nbsp;
                    <span className="border-[1px] px-1 rounded-lg text-sm font-normal border-black">
                      Part-Time
                    </span>
                  </p>
                  <sub className="font-semibold">Jan, 2015 - May, 2018</sub>
                </div>
              </div>
              <p className="pt-5 pl-4">
                <ul className="list-disc list-inside">
                  <li>
                    Rayong Runing Marathon Register Application & Landing
                    <ul className="pl-6">
                      <li>- Stack: Laravel, HTML5 , Jquery , Photoshop</li>
                    </ul>
                  </li>
                  <li>
                    Material Tracking at CWGreat Company Limited
                    <ul className="pl-6">
                      <li>- Stack: PHP Mvc, HTML5 , Jquery , Photoshop</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 pl-5 border-l-2 border-blue-200 mt-5">
          <div className="min-h-[5rem] border-b-2 border-blue-200 p-5 flex flex-col gap-5">
            <h1 className="flex font-semibold underline underline-offset-4 uppercase">
              Languages & Expertise
            </h1>
            <ul className="list-disc list-inside flex flex-col gap-3.5">
              <li>
                <span className="text-md font-medium mr-2">TypeScript :</span>
                Advanced in building scalable front-end applications with
                Next.js and React.js. Expertise in type-safe code, enhanced by
                Tailwind CSS for design, Figma for layouts, and Nx for micro
                frontend architecture.
              </li>
              <li>
                <span className="text-md font-medium mr-2">Lua :</span>
                Experience in scripting for online game tools, focusing on
                performance and efficiency to enhance player interactions.
              </li>
              <li>
                <span className="text-md font-medium mr-2">Golang :</span>
                Strong background in developing high-performance microservices,
                including a web crawler microservice using RabbitMQ and MongoDB,
                managing over 1 million messages per minute.
              </li>
              <li>
                <span className="text-md font-medium mr-2">Java :</span>
                Proficient in creating BPM (Business Process Management) systems
                integrating with SAP S/4HANA, managing DB2 databases, and
                writing ABAP code for report generation. Experienced with Spring
                Framework for robust enterprise applications.
              </li>
            </ul>
            <h1 className="flex font-semibold underline underline-offset-4 uppercase">
              DevOps Skills:
            </h1>
            <ul className="list-disc list-inside flex flex-col gap-3.5">
              <li>
                <span className="text-md font-medium mr-2">CI/CD :</span>
                Skilled in setting up and managing CI/CD pipelines with Jenkins
                and GitLab CI. Proficient in Docker and Kubernetes (K8s) for
                containerization and orchestration.
              </li>
              <li>
                <span className="text-md font-medium mr-2">
                  Deployment Strategies :
                </span>
                Skilled in implementing various deployment strategies including
                canary deployments, blue-green deployments, and rolling updates
                to ensure smooth and reliable application releases.
              </li>
              <li>
                <span className="text-md font-medium mr-2">
                  Cloud Platforms :
                </span>
                Experienced with AWS and Google Cloud, focusing on scalable,
                high-performance cloud infrastructure.
              </li>
              <li>
                <span className="text-md font-medium mr-2">Service Mesh :</span>
                Utilized Envoy for service mesh to enhance observability,
                security, and traffic management in microservices.
              </li>
              <li>
                <span className="text-md font-medium mr-2">
                  Scalability and Performance :
                </span>
                Expert in designing scalable systems and optimizing performance
                across cloud environments and containerized applications.
              </li>
            </ul>
            <h1 className="flex font-semibold underline underline-offset-4 uppercase">
              Specializations:
            </h1>
            <ul className="list-disc list-inside flex flex-col gap-3.5">
              <li>
                <span className="text-md font-medium mr-2">
                  System Optimization :
                </span>
                Expertise in performance tuning and optimization across multiple
                languages and platforms.
              </li>
              <li>
                <span className="text-md font-medium mr-2">
                  Best Practices :
                </span>
                Deep knowledge of design patterns, clean code principles,
                test-driven development (TDD), and Domain Driving Design (DDD).
              </li>
              <li>
                <span className="text-md font-medium mr-2">
                  Micro Frontends :
                </span>
                Experience with Nx for implementing modular, scalable micro
                frontend architectures with Island Architecture Principles.
              </li>
              <li>
                <span className="text-md font-medium mr-2">DevOps :</span>
                Proficient in CI/CD (Jenkins, GitLab CI), containerization
                (Docker), orchestration (Kubernetes), cloud infrastructure (AWS,
                Google Cloud), and service mesh (Envoy).
              </li>
            </ul>
          </div>
          <div className="min-h-[5rem] border-b-2 border-blue-200 p-5">
            <h1 className="text-lg underline underline-offset-4 font-bold pb-4">
              HOBBIES
            </h1>
            <div className="flex flex-col">
              <ul className="list-inside list-disc">
                <li>Off-Road Motorcycle</li>
                <li>Guitar Player</li>
              </ul>
            </div>
          </div>
          <div className="min-h-[5rem] p-5">
            <h1 className="text-lg underline underline-offset-4 font-bold pb-4">
              LANGUAGES
            </h1>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <p className="flex text-xs">Thai</p>
                <p className="flex text-xs">Native speaker</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="flex text-xs">English</p>
                <p className="flex text-xs">Good working knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
