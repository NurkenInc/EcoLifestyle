import React, { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router';
import { MdDateRange } from 'react-icons/md'

import { GoodsModal } from '../components';

import { goodsCalendar, monthNames, weekdays } from '../constants';

const GoodsCalendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(0);
  const [activeProduct, setActiveProduct] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()

  const generateDates = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dates = [];
    for (let date = firstDay; date <= lastDay; date.setDate(date.getDate() + 1)) {
      dates.push(new Date(date));
    }
    return dates;
  };

  const generateCalendarGrid = (year, month) => {
    const dates = generateDates(year, month);
    const calendar = [];
    let week = [];
    for (let date of dates) {
      week.push(date);
      if (date.getDay() === 6) {
        calendar.push(week);
        week = [];
      }
    }
    if (week.length > 0) {
      calendar.push(week);
    }
    return calendar;
  };

  const dateMatch = (date) => {
    return goodsCalendar.some((good) => (
      good.date.getMonth() === date.getMonth() &&
      good.date.getDate() === date.getDate()
    ))
  }

  return (
    <Box
      mt={'15%'}
      mx={'auto'}
    >
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Heading as='h1'>{year}</Heading>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mx={8}>
        <Button  
          onClick={() => {
            navigate('/eventscalendar')
          }}
          colorScheme='teal'
          leftIcon={<MdDateRange />}
        >
          Каленьдарь мероприятий и событий
        </Button>
      </Box>
      <Box 
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexWrap={'wrap'}
        gap={8}
      >
        {
          monthNames.map((monthName, index) => (
            <Table key={index} width={'30%'}>
              <Thead>
                <Tr>
                  <Th colSpan={7} textAlign={'center'}>{monthName}</Th>
                </Tr>
                <Tr>
                  {weekdays.map((weekday) => (
                    <Th key={weekday}>{weekday}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {generateCalendarGrid(year, index).map((week, index) => (
                  <Tr key={index}>
                    {week.map((date, index) => (
                      <Td 
                        key={index}
                        cursor={dateMatch(date) ? 'pointer' : null}
                        backgroundColor={
                          dateMatch(date) ? 'red' : null
                        }
                        onClick={
                          () => {
                            if(dateMatch(date)) {
                              onOpen()
                              setActiveProduct(goodsCalendar.find((product) => product.date.getMonth() === date.getMonth() &&
                              product.date.getDate() === date.getDate()))
                            }
                          }
                        }
                      >
                        {date.getDate()}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          ))
        } 
      </Box>
      <GoodsModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} product={activeProduct} />
    </Box>
  )
}

export default GoodsCalendar