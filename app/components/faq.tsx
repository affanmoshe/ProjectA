"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
  {
    question: "What is McNiceTV?",
    answer:
      "McNiceTV is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, and documentaries. You can watch as much as you want whenever you want without a single commercial all for one low monthly price Theres always something new to discover and new TV shows and movies are added every weeks, and more on thousands of internet-connected devices"

  },
  {
    question: "How much does McNiceTV cost?",
    answer:
      "Watch DballsTV on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. With only $20 a month, no extra costs and up to 3 devices per account",
  },
  {
    question: "Where can i watch McNiceTV?",
    answer:
      "Watch anywhere, anytime. Sign in with your McNiceTV account to watch instantly on the web at McNiceTV.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while youre on the go and without an internet connection.",

  },
  {
    question: "What can i watch on McNiceTV?",
    answer:
      "McNiceTV has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "is McniceTV good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
]; 

export function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Lets clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
        We understand that you may have questions regarding our TV services, and we are here to help. Here, you will find answers to some of the most commonly asked questions by our customers. 
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}