// import { useLocalStorage } from "usehooks-ts";

// function useLocalStorageSet<T>(
//   key: string,
//   initialValues?: Iterable<T> | null
// ): [CustomSet<T>, Dispatch<SetStateAction<CustomSet<T>>>, () => void] {
//   return useLocalStorage<CustomSet<T>>(
//       key,
//       new CustomSet<T>(initialValues),
//       {
//         serializer: CustomSet.serialize,
//         deserializer: CustomSet.deserialize,
//         initializeWithValue: true,
//       }
//   );
// }

class CustomSet<T> implements Iterable<T> {
    private items: Map<T, boolean> = new Map();

    constructor(initialValues?: Iterable<T> | null) {
        // console.log(initialValues)
        if (initialValues) {
            for (const value of initialValues) {
                this.add(value);
            }
        }
    }


    add(value: T): this { this.items.set(value, true); return this; }
    has(value: T): boolean { return this.items.has(value); }
    get size(): number { return this.items.size; }
    delete(value: T): boolean { return this.items.delete(value); }
    clear(): void { this.items.clear(); }
    toArray(): T[] { return Array.from(this.items.keys()); }
    toString(): string { return `{ ${Array.from(this.items.keys()).join(', ')} }`; }
    [Symbol.iterator](): Iterator<T> { return this.items.keys(); }
    forEach(callbackfn: (value: T, value2: T, set: CustomSet<T>) => void, thisArg?: CustomSet<T>): void {
        this.items.forEach((_, value) => { callbackfn.call(thisArg, value, value, this); });
    }
    static serialize<T>(value: CustomSet<T>): string { return JSON.stringify(Array.from(value.items.keys()))};
    static deserialize<T>(value: string): CustomSet<T> { return new CustomSet<T>(JSON.parse(value))}


    // Check if this set is a subset of another set
    isSubsetOf(otherSet: CustomSet<T>): boolean {
        for (const item of this.items.keys()) {
            if (!otherSet.has(item)) {
                return false; // If any item is not in the other set, it's not a subset
            }
        }
        return true; // All items are in the other set
    }

    equals(otherSet: CustomSet<T>): boolean {
        return this.isSubsetOf(otherSet) && otherSet.isSubsetOf(this);
    }

    // Get the difference between this set and another set
    difference(otherSet: CustomSet<T>): CustomSet<T> {
        const result = new CustomSet<T>();
        for (const item of this.items.keys()) {
            if (!otherSet.has(item)) {
                result.add(item);
            }
        }
        return result;
    }


    /**
     * Returns a new CustomSet containing all unique elements from both this set and another set.
     * @param otherSet - The other CustomSet to combine with.
     * @returns A new CustomSet with the union of both sets.
     */
    union(otherSet: CustomSet<T>): CustomSet<T> {
        const result = new CustomSet<T>();
        this.forEach(value => result.add(value));
        otherSet.forEach(value => result.add(value));

        return result;
    }

    intersect(otherSet: CustomSet<T>): CustomSet<T> {
        const result = new CustomSet<T>();
        this.forEach(value => {if (otherSet.has(value)) result.add(value)});

        return result;
    }
}

// // Testing CustomSet class
// function runTests() {
//     // Test Initialization and Add
//     const set1 = new CustomSet<number>([1, 2, 3]);
//     console.assert(set1.size === 3, 'Test 1 Failed');
//     console.assert(set1.has(1) === true, 'Test 2 Failed');
//     console.assert(set1.has(4) === false, 'Test 3 Failed');

//     // Test Add and Delete
//     set1.add(4);
//     console.assert(set1.size === 4, 'Test 4 Failed');
//     console.assert(set1.has(4) === true, 'Test 5 Failed');
//     set1.delete(4);
//     console.assert(set1.size === 3, 'Test 6 Failed');
//     console.assert(set1.has(4) === false, 'Test 7 Failed');

//     // Test Difference
//     const set2 = new CustomSet<number>([3, 4, 5, 6]);
//     const diff = set1.difference(set2);
//     console.assert(diff.size === 1, 'Test 8 Failed');
//     console.assert(diff.has(1) === true, 'Test 9 Failed');
//     console.assert(diff.has(2) === true, 'Test 10 Failed');
//     console.assert(diff.has(3) === false, 'Test 11 Failed');

//     // Test isSubsetOf
//     const subset = new CustomSet<number>([1, 2]);
//     const superset = new CustomSet<number>([1, 2, 3, 4]);
//     const disjointSet = new CustomSet<number>([5, 6]);

//     console.assert(subset.isSubsetOf(superset) === true, 'Test 12 Failed');
//     console.assert(subset.isSubsetOf(disjointSet) === false, 'Test 13 Failed');
//     console.assert(superset.isSubsetOf(superset) === true, 'Test 14 Failed');

//     // Test toArray and toString
//     console.assert(JSON.stringify(set1.toArray()) === JSON.stringify([1, 2, 3]), 'Test 15 Failed');
//     console.assert(set1.toString() === '{ 1, 2, 3 }', 'Test 16 Failed');

//     // Test forEach
//     let sum = 0;
//     set1.forEach((value) => sum += value);
//     console.assert(sum === 6, 'Test 17 Failed');

//     // Test iterable
//     const arrayFromSet = [...set1];
//     console.assert(JSON.stringify(arrayFromSet) === JSON.stringify([1, 2, 3]), 'Test 18 Failed');

//     console.log('All tests passed!');
// }

export {
    CustomSet,
    // useLocalStorageSet
}