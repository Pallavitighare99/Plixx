import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../data/CategoriesData'
import { FaAngleDown, FaCheck } from 'react-icons/fa'
import { LanguageData, RateData, TimeData, YearData } from '../data/FilterData';



function Filter( props ) {

    const {
        categories,
        category,
        setCategory,
        year,
        setYear,
        time,
        setTime,
        rate,
        setRate,
        language,
        setLanguage
    } = props?.data;

    const Filter = [
        {
            value: category,
            onChange: setCategory,
            items: categories?.length > 0
                ? [{ title: "All Categories" }, ...categories]
                : [{ title: "No category found" }]
        },
        {
            value: year,
            onChange: setYear,
            items: YearData
        },
        {
            value: time,
            onChange: setTime,
            items: TimeData
        },
        {
            value: rate,
            onChange: setRate,
            items: RateData
        },
        {
            value: language,
            onChange: setLanguage,
            items: LanguageData
        },
    ]

    // useEffect(() => {
    //     console.log(category, language, year, rate)
    //     if (category?.title !== "No category found") {
    //         dispatch(moviesListAction({
    //             // category, time, language, rate, year, search, pageNumber
    //             category: category?.title === "All Categories" ? "" : category?.title,
    //             time: time?.title.replace(/\D/g, ""),
    //             language: language?.title === "Sort By Language" ? "" : language?.title,
    //             rate: rate?.title.replace(/\D/g, ""),
    //             year: year?.title.replace(/\D/g, ""),
    //             search: ""
    //         }))
    //     }

    // }, [category, language, year, time, rate, dispatch]);

    return (
        <div className='my-6 bg-dry border text-dryGray rborder-gray-800 grid md:grid-cols-5 grid-cols-2 lg:gap-12 gap-2 rounded p-6'>
            {
                Filter.map((item, index) => (
                    <Listbox key={index} value={item.value} onChange={item.onChange} >
                        <div className='relative'>
                            <Listbox.Button className='relative border border-gray-800 bg-main w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs'>
                                <span className='block truncate'>{item.value.title}</span>
                                <span className='absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2'>
                                    <FaAngleDown className="h-4 w-4" aria-hidden="true" />
                                </span>
                            </Listbox.Button>
                            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white text-dryGray rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {item.items.map((iterm, i) => (
                                        <Listbox.Option key={i}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-subMain text-white" : "text-main"}`} value={iterm}>
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? "font-semibold" : "font-normal"}`}>
                                                        {iterm.title}
                                                    </span>
                                                    {
                                                        selected ? (
                                                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3`}>
                                                                <FaCheck className='h-3 w-3 ' aria-hidden="true" />
                                                            </span>
                                                        ) : null
                                                    }
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>

                    </Listbox>

                ))}
        </div>
    )
}

export default Filter