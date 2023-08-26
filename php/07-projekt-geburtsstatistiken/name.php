<?php
include 'views/header.php';
include 'inc/names.php';
include 'inc/functions.php';

$currentName = $_GET['name'];

$namesFiltered = [];
foreach ($names as $nameArray) {
    if ($nameArray['name'] !== $currentName) {
        continue;
    }
    $namesFiltered[] = $nameArray;
}
?>


<?php if (!empty($namesFiltered)): ?>
    <h2>Geburtsstatistiken für
        <?php echo e($currentName); ?>
    </h2>

    <?php
    $chartYears = [];
    $chartCounts = [];
    foreach ($namesFiltered as $nameArray) {
        $chartYears[] = $nameArray['year'];
        $chartCounts[] = $nameArray['count'];
    }
    ?>

    <!-- Erzeugt ein Liniendiagramm mit Chart.js -->
    <script type="text/javascript" src="scripts/chart.js"></script>
    <canvas id="myChart" width="400" height="200"></canvas>
    <script>
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                // Kodiert das years-Array zu einem JSON-Object
                labels: <?php echo json_encode($chartYears); ?>,
                datasets: [{
                    label: '# of babies',
                    // Kodiert das counts-Array zu einem JSON-Object
                    data: <?php echo json_encode($chartCounts); ?>,
                    borderColor: 'rgb(75, 192, 192)',
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>

    <table>
        <thead>
            <tr>
                <th>Jahr</th>
                <th>Anzahl Geburten</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($namesFiltered as $nameArray): ?>
                <tr>
                    <td>
                        <?php echo $nameArray['year']; ?>
                    </td>
                    <td>
                        <?php echo $nameArray['count']; ?>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
<?php endif; ?>

<?php

include 'views/footer.php';
?>