from typing import List, Optional


# Quiz 1:
# Find the index such that the sum of elements at lower indices
# is equal to the sum of elements at higher indices.
#
# Example 1: 
# A = [-6, 1, 4, 2, -4, 3, 0]
# Output: 3
#
# Example 2:
# A = [0, 1, 2, 4]
# Output: None

def quiz1(lst: List[int]) -> Optional[int]:
  length = len(lst)
  prefix_sum_arr = [lst[0]]
  prefix_sum_reverse_arr = [lst[-1]]

  for i in range(length - 1):
    prefix_sum_arr.append(prefix_sum_arr[i] + lst[i + 1])
    prefix_sum_reverse_arr.append(prefix_sum_reverse_arr[i] + lst[length - i - 2])
  
  for i in range(length - 1):
    print(i + 1, "-", length - i - 2)
    if (prefix_sum_arr[i + 1] == prefix_sum_reverse_arr[length - i - 2]):
      return i + 1

  return None  


print(quiz1([-6, 1, 4, 2, -4, 3, 0]) == 3)
print(quiz1([0, 1, 2, 4]) is None)


# Quiz 2
# Given a list of integers, check if there are two elements in the list whose sum equals 100.


def quiz2(lst: List[int]) -> bool:
  remain_lst = {}
  for item in lst:
    if item == 50:
      remain_lst[50] = 2
    else:
      remain_lst[100 - item] = 1
  
  for item in lst:
    if item == 50:
      remain_lst[50] -= 1
    if item in remain_lst and remain_lst[item] == 1:
      return True

  return False



print(quiz2([10, 20, 30, 40]) is False)
print(quiz2([20, 40, 80, 100]) is True)