// Input: intervals = [(0,30),(5,10),(15,20)]
// Output: false
// Explanation: 
// (0,30), (5,10) and (0,30),(15,20) will conflict

// Input: intervals = [(5,8),(9,15)]
// Output: true
// Explanation: 
// Two times will not conflict 
/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
  canAttendMeetings(intervals) {
    // Write your code here
    intervals.sort((a, b) => a.start - b.start)

	for (let i = 0; i < intervals.length - 1; i++) {
		if (intervals[i].start > intervals[i + 1].end) return true
	}
	return false
  }
}