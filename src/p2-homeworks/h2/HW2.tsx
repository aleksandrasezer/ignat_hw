import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './HW2.module.css'

export type AffairPriorityType = "high" | "middle" | "low"
export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'Chocolate', priority: 'high'},
    {_id: 2, name: 'Unicorns', priority: 'low'},
    {_id: 3, name: 'Ice-cream', priority: 'low'},
    {_id: 4, name: 'Love', priority: 'high'},
    {_id: 5, name: 'Hugs', priority: 'middle'},
]

export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === 'all') return affairs
    if (filter === 'high') return affairs.filter(el => el.priority === 'high')
    if (filter === 'middle') return affairs.filter(el => el.priority === 'middle')
    if (filter === 'low') return affairs.filter(el => el.priority === 'low')
    else return []
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            <div>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/
            }
            {/*<AlternativeAffairs/>*/
            }
            <hr/>
        </div>
    )
}

export default HW2
