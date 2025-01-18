import authMenu from '@/config/authMenuLinks';

type AuthMenuType = typeof authMenu;

export const getDropdownMenus = (menu: AuthMenuType) => {
  const dropdownMap: Record<string, Omit<AuthMenuType[number], 'dropdown'>[]> = {};

  menu.forEach(item => {
    if (item.dropdown) {
      if (!dropdownMap[item.dropdown]) {
        dropdownMap[item.dropdown] = [];
      }

      // eslint-disable-next-line no-unused-vars
      const { dropdown, ...rest } = item;
      // Remove the dropdown key
      dropdownMap[item.dropdown].push(rest);
    }
  });

  // Convert the map into an array
  return Object.entries(dropdownMap).map(([key, items]) => ({
    name: key,
    items,
  }));
};
