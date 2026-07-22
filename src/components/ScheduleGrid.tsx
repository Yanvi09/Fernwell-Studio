import { useState } from 'react'
import { schedule } from '../mock-data/schedule'
import { classTypes } from '../mock-data/classes'
import { useNavigate } from 'react-router-dom'

const timeSlots = [
  "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"
]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const ScheduleGrid = ({ filterClassId }: { filterClassId?: string }) => {
  const navigate = useNavigate()
  const [selectedDay, setSelectedDay] = useState<string | null>(null)

  const getClassForSlot = (day: string, time: string) => {
    const classId = schedule[day]?.[time]
    if (!classId) return null
    if (filterClassId && classId !== filterClassId) return null
    return classTypes.find(c => c.id === classId)
  }

  const handleSlotClick = (day: string, time: string) => {
    const classInfo = getClassForSlot(day, time)
    if (classInfo) {
      navigate('/book', { state: { classId: classInfo.id, day, time } })
    }
  }

  return (
    <section id="schedule" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-brand-green text-center mb-4">
          Weekly Schedule
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          {filterClassId ? 'Available times for your selected class' : 'Click any class to book your spot'}
        </p>

        {/* Mobile Day Selector */}
        <div className="md:hidden mb-6">
          <select
            value={selectedDay || ''}
            onChange={(e) => setSelectedDay(e.target.value || null)}
            className="w-full p-3 border border-border rounded-lg bg-surface text-text-primary"
          >
            <option value="">Select a day</option>
            {days.map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-8 gap-2 mb-4">
              <div className="font-medium text-text-muted"></div>
              {days.map(day => (
                <div key={day} className="font-fraunces font-semibold text-brand-green text-center">
                  {day.slice(0, 3)}
                </div>
              ))}
            </div>
            
            {timeSlots.map(time => (
              <div key={time} className="grid grid-cols-8 gap-2 mb-2">
                <div className="text-sm text-text-muted text-right pr-2">{time}</div>
                {days.map(day => {
                  const classInfo = getClassForSlot(day, time)
                  return (
                    <div
                      key={`${day}-${time}`}
                      onClick={() => handleSlotClick(day, time)}
                      className={`
                        p-2 rounded-lg text-center text-sm cursor-pointer transition-colors
                        ${classInfo 
                          ? 'bg-brand-green/10 hover:bg-brand-green/20 text-brand-green font-medium' 
                          : 'bg-surface-warm/30 text-text-muted/40 cursor-not-allowed'
                        }
                      `}
                    >
                      {classInfo ? classInfo.name : ''}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile List View */}
        <div className="md:hidden">
          {selectedDay && (
            <div className="space-y-3">
              {timeSlots.map(time => {
                const classInfo = getClassForSlot(selectedDay, time)
                if (!classInfo) return null
                return (
                  <div
                    key={time}
                    onClick={() => handleSlotClick(selectedDay, time)}
                    className="bg-brand-green/10 hover:bg-brand-green/20 p-4 rounded-lg cursor-pointer transition-colors"
                  >
                    <div className="font-medium text-brand-green">{classInfo.name}</div>
                    <div className="text-sm text-text-muted">{time}</div>
                  </div>
                )
              })}
              {!timeSlots.some(time => getClassForSlot(selectedDay, time)) && (
                <div className="text-center text-text-muted py-8">
                  No classes available on {selectedDay}
                </div>
              )}
            </div>
          )}
          {!selectedDay && (
            <div className="text-center text-text-muted py-8">
              Select a day to view available classes
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ScheduleGrid
