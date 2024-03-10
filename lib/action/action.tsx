"use server";

export async function getMenus() {

  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`${process.env.API_HOST}/menus`, {
    // cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getTopMenus() {

  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`${process.env.API_HOST}/topmenus`, {
    // cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getCampaignsTabs() {

  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`${process.env.API_HOST}/campaignstabs`, {
    // cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getTasks() {

  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`${process.env.API_HOST}/tasks`, {
    // cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getCategories() {

  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`${process.env.API_HOST}/category`, {
    // cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getCards() {

  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`${process.env.API_HOST}/cards`, {
    // cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}