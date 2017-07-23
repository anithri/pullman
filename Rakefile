# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

colors = {
    'dark-red'      => ['#e7040f', 'near-white','#ddd'],
    'red'           => ['#ff4136', 'near-black','#222'],
    'light-red'     => ['#ff725c', 'near-black','#222'],
    'orange'        => ['#ff6300', 'near-black','#222'],
    'gold'          => ['#ffb700', 'near-black','#222'],
    'yellow'        => ['#ffd700', 'near-black','#222'],
    'light-yellow'  => ['#fbf1a9', 'near-black','#222'],
    'purple'        => ['#5e2ca5', 'near-white','#ddd'],
    'light-purple'  => ['#a463f2', 'near-black','#222'],
    'dark-pink'     => ['#d5008f', 'near-black','#222'],
    'hot-pink'      => ['#ff41b4', 'near-black','#222'],
    'pink'          => ['#ff80cc', 'near-black','#222'],
    'light-pink'    => ['#ffa3d7', 'near-black','#222'],
    'dark-green'    => ['#137752', 'near-white','#ddd'],
    'green'         => ['#19a974', 'near-black','#222'],
    'light-green'   => ['#9eebcf', 'near-black','#222'],
    'navy'          => ['#001b44', 'near-white','#ddd'],
    'dark-blue'     => ['#00449e', 'near-white','#ddd'],
    'blue'          => ['#357edd', 'near-white','#ddd'],
    'light-blue'    => ['#96ccff', 'near-black','#222'],
    'lightest-blue' => ['#cdecff', 'near-black','#222'],
    'washed-blue'   => ['#f6fffe', 'near-black','#222'],
    'washed-green'  => ['#e8fdf5', 'near-black','#222'],
    'washed-yellow' => ['#fffceb', 'near-black','#222'],
    'washed-red'    => ['#ffdfdf', 'near-black','#222'],
}



task :themes do
  out = []
  colors.each_pair do |name, (bgcolor, fg_var, fg_col)|
    puts [name, bgcolor, fg_var, fg_col].inspect
    out << ".highlight-#{name} {"
    out << "  background-color: var(--#{name}, #{bgcolor});"
    out << "  color: var(--#{fg_var}, #{fg_col});"
    out << "}\n"
    out << ".card-#{name} {"
    out << "  border-color: var(--#{name}, #{bgcolor});"
    out << "}\n"
    out << ".card-#{name} header {"
    out << "  background-color: var(--#{name}, #{bgcolor});"
    out << "  color: var(--#{fg_var}, #{fg_col});"
    out << "}"
  end

  File.open('app/assets/stylesheets/_themes.css','wb') do |file|
    file.puts '/* auto generated do not modify.  see Rakefile */'
    out.each {|a| file.puts a}
    file.puts ''
  end
end
