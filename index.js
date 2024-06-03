import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearch = `
Binary Search is a searching algorithm that finds the position of a target value within a sorted array.

Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

The algorithm is as follows:
1. Compare x with the middle element.
2. If x matches with the middle element, we return the mid index.
3. Else if x is greater than the mid element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.
4. Else (x is smaller) recur for the left half.

The time complexity of Binary Search is O(log n).

Here is an example of Binary Search in JavaScript:

const binarysearch = function (arr, x) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

You can find more information about Binary Search [here](https://en.wikipedia.org/wiki/Binary_search_algorithm).

If you have any questions, feel free to ask!
`;

bot.start((ctx) => ctx.reply("Welcome to JJK Bot!"));
bot.command("binarySearch", (ctx) => ctx.reply(binarySearch));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.launch();
