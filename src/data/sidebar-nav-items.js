export default function() {
  return [
    {
      title: "Mantenedores",
      htmlBefore: '<i class="material-icons">edit</i>',
      dropdown: true,
      to: "#",
      subNav: [
        {
          title: "Usuarios",
          to: "/mantenedores/usuarios"
        },
        {
          title: "Roles",
          to: "/mantenedores/roles"
        },
      ]
    }
  ];
}
